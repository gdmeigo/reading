from pathlib import Path

from PIL import Image, ImageDraw


OUT_DIR = Path(__file__).resolve().parent / "images"
OUT_DIR.mkdir(exist_ok=True)

W, H = 640, 340
BLACK = 35
WHITE = 255
LW = 3


def canvas():
    return Image.new("L", (W, H), WHITE)


def line(draw, *pts, width=LW):
    draw.line(pts, fill=BLACK, width=width)


def dashed(draw, a, b, width=2, dash=10, gap=8):
    x1, y1 = a
    x2, y2 = b
    dx, dy = x2 - x1, y2 - y1
    dist = (dx * dx + dy * dy) ** 0.5
    if not dist:
        return
    ux, uy = dx / dist, dy / dist
    t = 0
    while t < dist:
        e = min(t + dash, dist)
        line(draw, x1 + ux * t, y1 + uy * t, x1 + ux * e, y1 + uy * e, width=width)
        t += dash + gap


def head(draw, x, y, r=16, look="right"):
    draw.ellipse((x - r, y - r, x + r, y + r), outline=BLACK, width=LW)
    if look == "right":
        draw.ellipse((x + 6, y - 4, x + 10, y), fill=BLACK)
    elif look == "left":
        draw.ellipse((x - 10, y - 4, x - 6, y), fill=BLACK)
    else:
        draw.ellipse((x - 7, y - 4, x - 3, y), fill=BLACK)
        draw.ellipse((x + 3, y - 4, x + 7, y), fill=BLACK)


def aki(draw, x, y, pose="see", look="right"):
    head(draw, x, y, look=look)
    for sx, ex in [(-14, -22), (-7, -10), (0, 0), (7, 10), (14, 22)]:
        line(draw, x + sx, y - 14, x + ex, y - 29, width=2)
    neck = y + 16
    hip = y + 88
    line(draw, x, neck, x, hip)
    if pose == "put":
        line(draw, x, y + 43, x + 65, y + 70)
        line(draw, x, y + 43, x + 22, y + 35)
    elif pose == "hold":
        line(draw, x, y + 43, x + 70, y + 50)
        line(draw, x, y + 43, x + 30, y + 68)
    else:
        line(draw, x, y + 42, x - 25, y + 62)
        line(draw, x, y + 42, x + 25, y + 62)
    line(draw, x, hip, x - 32, y + 145)
    line(draw, x, hip, x + 32, y + 145)


def meg(draw, x, y, pose="see", look="left"):
    head(draw, x, y, look=look)
    tail_x = x + 23 if look == "left" else x - 23
    draw.ellipse((tail_x - 8, y - 6, tail_x + 8, y + 10), outline=BLACK, width=LW)
    neck = y + 16
    waist = y + 88
    line(draw, x, neck, x, waist)
    draw.polygon([(x - 28, waist), (x + 28, waist), (x + 39, waist + 33), (x - 39, waist + 33)], outline=BLACK, fill=WHITE)
    if pose == "put":
        line(draw, x, y + 43, x - 65, y + 70)
        line(draw, x, y + 43, x - 25, y + 40)
    elif pose == "hold":
        line(draw, x, y + 43, x - 70, y + 50)
        line(draw, x, y + 43, x - 30, y + 68)
    else:
        line(draw, x, y + 42, x - 25, y + 62)
        line(draw, x, y + 42, x + 25, y + 62)
    line(draw, x - 12, waist + 33, x - 32, y + 152)
    line(draw, x + 12, waist + 33, x + 32, y + 152)


def table(draw):
    line(draw, 165, 260, 505, 260, width=2)
    line(draw, 205, 260, 190, 315, width=2)
    line(draw, 465, 260, 480, 315, width=2)


def glass(draw, x, y, w=105, h=120, water=True):
    top_left = x + 10
    top_right = x + w - 10
    bottom_left = x + 25
    bottom_right = x + w - 25
    draw.arc((top_left, y - 7, top_right, y + 15), 0, 360, fill=BLACK, width=LW)
    line(draw, top_left, y + 4, bottom_left, y + h)
    line(draw, top_right, y + 4, bottom_right, y + h)
    draw.arc((bottom_left, y + h - 12, bottom_right, y + h + 10), 0, 180, fill=BLACK, width=LW)
    if water:
        wy = y + 62
        line(draw, top_left + 12, wy, top_right - 12, wy, width=2)
        draw.arc((top_left + 18, wy - 8, top_right - 18, wy + 16), 10, 170, fill=BLACK, width=2)


def pen(draw, x, y, length=118, angle=0, width=9):
    if angle == 0:
        body = [(x, y), (x + length, y + 7), (x + length - 2, y + width + 7), (x - 2, y + width)]
        tip = [(x + length, y + 7), (x + length + 17, y + 13), (x + length - 2, y + width + 7)]
    else:
        body = [(x, y), (x + length, y + 36), (x + length - 5, y + 47), (x - 5, y + 11)]
        tip = [(x + length, y + 36), (x + length + 17, y + 40), (x + length - 5, y + 47)]
    draw.polygon(body, outline=BLACK, fill=WHITE)
    draw.polygon(tip, outline=BLACK, fill=BLACK)
    line(draw, x + 10, y + 2, x + 6, y + width + 2, width=2)


def short_pen_in_glass(draw, x, y):
    pen(draw, x, y, length=54, angle=0, width=8)


def broken_pen(draw, x, y):
    # The offset lower half makes the straight pen look broken at the water line.
    pen(draw, x, y, length=76, angle=1, width=8)
    pen(draw, x + 82, y + 58, length=58, angle=1, width=8)


def save(img, name):
    img.save(OUT_DIR / name)


def panel1():
    img = canvas()
    d = ImageDraw.Draw(img)
    aki(d, 95, 74, pose="see", look="right")
    meg(d, 548, 74, pose="see", look="left")
    table(d)
    pen(d, 230, 225, length=140, angle=0)
    glass(d, 390, 132, water=True)
    dashed(d, (112, 72), (300, 230))
    dashed(d, (528, 72), (430, 175))
    save(img, "panel-1.png")


def panel2():
    img = canvas()
    d = ImageDraw.Draw(img)
    aki(d, 95, 74, pose="put", look="right")
    meg(d, 548, 74, pose="see", look="left")
    table(d)
    glass(d, 305, 126, water=True)
    short_pen_in_glass(d, 328, 205)
    dashed(d, (112, 72), (350, 210))
    dashed(d, (528, 72), (352, 210))
    save(img, "panel-2.png")


def panel3():
    img = canvas()
    d = ImageDraw.Draw(img)
    aki(d, 95, 74, pose="see", look="right")
    meg(d, 548, 74, pose="hold", look="left")
    table(d)
    glass(d, 280, 132, water=True)
    pen(d, 360, 205, length=130, angle=0)
    dashed(d, (112, 72), (430, 210))
    dashed(d, (528, 72), (430, 210))
    save(img, "panel-3.png")


def panel4():
    img = canvas()
    d = ImageDraw.Draw(img)
    aki(d, 95, 74, pose="see", look="right")
    meg(d, 548, 74, pose="see", look="left")
    table(d)
    glass(d, 305, 126, water=True)
    broken_pen(d, 274, 164)
    dashed(d, (112, 72), (362, 218))
    dashed(d, (528, 72), (362, 218))
    save(img, "panel-4.png")


if __name__ == "__main__":
    panel1()
    panel2()
    panel3()
    panel4()
