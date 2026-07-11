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


def aki(draw, x, y, pose="stand", look="right"):
    head(draw, x, y, look=look)
    for sx, ex in [(-14, -22), (-7, -10), (0, 0), (7, 10), (14, 22)]:
        line(draw, x + sx, y - 14, x + ex, y - 29, width=2)
    neck = y + 16
    hip = y + 88
    line(draw, x, neck, x, hip)
    if pose == "put":
        line(draw, x, y + 43, x + 58, y + 68)
        line(draw, x, y + 43, x + 22, y + 35)
    elif pose == "take":
        line(draw, x, y + 43, x + 68, y + 48)
        line(draw, x, y + 43, x + 35, y + 65)
    elif pose == "see":
        line(draw, x, y + 42, x - 25, y + 62)
        line(draw, x, y + 42, x + 25, y + 62)
    else:
        line(draw, x, y + 42, x - 25, y + 62)
        line(draw, x, y + 42, x + 25, y + 62)
    line(draw, x, hip, x - 32, y + 145)
    line(draw, x, hip, x + 32, y + 145)


def meg(draw, x, y, pose="stand", look="left"):
    head(draw, x, y, look=look)
    tail_x = x + 23 if look == "left" else x - 23
    draw.ellipse((tail_x - 8, y - 6, tail_x + 8, y + 10), outline=BLACK, width=LW)
    neck = y + 16
    waist = y + 88
    line(draw, x, neck, x, waist)
    draw.polygon([(x - 28, waist), (x + 28, waist), (x + 39, waist + 33), (x - 39, waist + 33)], outline=BLACK, fill=WHITE)
    if pose == "put":
        line(draw, x, y + 43, x - 58, y + 68)
        line(draw, x, y + 43, x - 26, y + 40)
    elif pose == "take":
        line(draw, x, y + 43, x - 68, y + 48)
        line(draw, x, y + 43, x - 35, y + 65)
    elif pose == "see":
        line(draw, x, y + 42, x - 25, y + 62)
        line(draw, x, y + 42, x + 25, y + 62)
    else:
        line(draw, x, y + 42, x - 25, y + 62)
        line(draw, x, y + 42, x + 25, y + 62)
    line(draw, x - 12, waist + 33, x - 32, y + 152)
    line(draw, x + 12, waist + 33, x + 32, y + 152)


def box(draw, x, y, w=150, h=85, water=False):
    draw.polygon([(x, y), (x + w, y), (x + w - 25, y + h), (x - 25, y + h)], outline=BLACK, fill=WHITE)
    line(draw, x, y, x - 25, y + h)
    line(draw, x + w, y, x + w - 25, y + h)
    if water:
        line(draw, x + 12, y + h // 2, x + w - 38, y + h // 2 - 2, width=2)
        draw.arc((x + 28, y + h // 2 - 8, x + w - 48, y + h // 2 + 18), 10, 170, fill=BLACK, width=2)
    else:
        line(draw, x + 18, y + h // 2 + 15, x + w - 40, y + h // 2 + 13, width=2)


def book(draw, x, y, w=76, h=42):
    draw.rounded_rectangle((x, y, x + w, y + h), radius=5, outline=BLACK, width=LW, fill=WHITE)
    line(draw, x + 13, y + 4, x + 13, y + h - 4, width=4)
    for off in (13, 23, 32):
        line(draw, x + 23, y + off, x + w - 8, y + off - 2, width=1)


def pen(draw, x, y, length=58, angle=1):
    if angle:
        p1 = (x, y)
        p2 = (x + length, y + 22)
        p3 = (x + length - 4, y + 31)
        p4 = (x - 4, y + 9)
        draw.polygon([p1, p2, p3, p4], outline=BLACK, fill=WHITE)
        draw.polygon([(x + length, y + 22), (x + length + 14, y + 24), (x + length + 4, y + 33)], outline=BLACK, fill=BLACK)
        line(draw, x + 8, y + 3, x + 3, y + 12, width=2)
    else:
        draw.polygon([(x, y), (x + length, y + 8), (x + length - 2, y + 18), (x - 2, y + 10)], outline=BLACK, fill=WHITE)
        draw.polygon([(x + length, y + 8), (x + length + 14, y + 14), (x + length - 1, y + 18)], outline=BLACK, fill=BLACK)


def save(img, name):
    img.save(OUT_DIR / name)


def panel1():
    img = canvas()
    d = ImageDraw.Draw(img)
    aki(d, 95, 74, pose="put", look="right")
    meg(d, 548, 74, pose="put", look="left")
    box(d, 225, 160, w=150, h=95, water=True)
    book(d, 438, 182, w=80, h=44)
    pen(d, 278, 152, length=56, angle=1)
    pen(d, 456, 154, length=56, angle=1)
    dashed(d, (112, 72), (305, 174))
    dashed(d, (528, 72), (485, 176))
    save(img, "panel-1.png")


def panel2():
    img = canvas()
    d = ImageDraw.Draw(img)
    aki(d, 95, 74, pose="see", look="right")
    meg(d, 548, 74, pose="see", look="left")
    box(d, 225, 160, w=150, h=95, water=True)
    book(d, 438, 182, w=80, h=44)
    pen(d, 282, 170, length=56, angle=1)
    pen(d, 456, 154, length=56, angle=1)
    dashed(d, (112, 72), (305, 185))
    dashed(d, (528, 72), (485, 176))
    save(img, "panel-2.png")


def panel3():
    img = canvas()
    d = ImageDraw.Draw(img)
    aki(d, 95, 74, pose="take", look="right")
    meg(d, 548, 74, pose="take", look="left")
    box(d, 225, 160, w=150, h=95, water=True)
    book(d, 438, 182, w=80, h=44)
    pen(d, 388, 160, length=56, angle=1)
    pen(d, 250, 120, length=56, angle=1)
    dashed(d, (112, 72), (278, 142))
    dashed(d, (528, 72), (414, 180))
    save(img, "panel-3.png")


def panel4():
    img = canvas()
    d = ImageDraw.Draw(img)
    aki(d, 95, 74, pose="see", look="right")
    meg(d, 548, 74, pose="see", look="left")
    box(d, 225, 160, w=150, h=95, water=True)
    pen(d, 180, 150, length=56, angle=1)
    pen(d, 284, 170, length=56, angle=1)
    dashed(d, (112, 72), (205, 172))
    dashed(d, (528, 72), (310, 190))
    save(img, "panel-4.png")


if __name__ == "__main__":
    panel1()
    panel2()
    panel3()
    panel4()
