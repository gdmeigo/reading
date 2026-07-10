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


def arc(draw, box, start, end, width=LW):
    draw.arc(box, start, end, fill=BLACK, width=width)


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
    # Short hair, light and hand-drawn like the reference images.
    line(draw, x - 8, y - 15, x - 16, y - 29)
    line(draw, x + 1, y - 16, x + 2, y - 31)
    line(draw, x + 10, y - 13, x + 20, y - 25)
    neck = y + 16
    hip = y + 88
    line(draw, x, neck, x, hip)
    if pose == "put":
        line(draw, x, y + 43, x + 58, y + 68)
        line(draw, x, y + 43, x + 22, y + 35)
    elif pose == "look_box":
        line(draw, x, neck, x + 30, hip - 5)
        line(draw, x + 18, y + 45, x + 66, y + 68)
        line(draw, x + 20, y + 55, x + 66, y + 85)
        hip = y + 95
    elif pose == "surprise":
        line(draw, x, y + 42, x - 35, y + 18)
        line(draw, x, y + 42, x + 35, y + 18)
    elif pose == "receive":
        line(draw, x, y + 42, x + 72, y + 58)
        line(draw, x, y + 42, x - 25, y + 62)
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
    # Simple triangular skirt, like the existing images.
    draw.polygon([(x - 28, waist), (x + 28, waist), (x + 39, waist + 33), (x - 39, waist + 33)], outline=BLACK, fill=WHITE)
    if pose == "put":
        line(draw, x, y + 43, x - 58, y + 68)
        line(draw, x, y + 43, x - 26, y + 40)
    elif pose == "point":
        line(draw, x, y + 43, x - 65, y + 68)
        line(draw, x, y + 43, x - 25, y + 60)
    elif pose == "surprise":
        line(draw, x, y + 42, x - 35, y + 18)
        line(draw, x, y + 42, x + 35, y + 18)
    elif pose == "receive":
        line(draw, x, y + 42, x - 72, y + 58)
        line(draw, x, y + 42, x + 22, y + 62)
    else:
        line(draw, x, y + 42, x - 25, y + 62)
        line(draw, x, y + 42, x + 25, y + 62)
    line(draw, x - 12, waist + 33, x - 32, y + 152)
    line(draw, x + 12, waist + 33, x + 32, y + 152)


def man_upper(draw, x, y, pose="book"):
    head(draw, x, y, r=18, look="front")
    # Hat and moustache distinguish the man without labels.
    draw.rectangle((x - 22, y - 34, x + 22, y - 26), outline=BLACK, width=LW)
    line(draw, x - 34, y - 26, x + 34, y - 26)
    arc(draw, (x - 14, y + 3, x, y + 15), 0, 180)
    arc(draw, (x, y + 3, x + 14, y + 15), 0, 180)
    neck = y + 18
    body = y + 82
    line(draw, x, neck, x, body)
    if pose == "book":
        line(draw, x, y + 45, x - 45, y + 35)
        line(draw, x, y + 45, x + 78, y + 22)
    elif pose == "down":
        line(draw, x, y + 45, x - 32, y + 75)
        line(draw, x, y + 45, x + 32, y + 75)
    else:
        line(draw, x, y + 45, x - 35, y + 20)
        line(draw, x, y + 45, x + 35, y + 20)


def box(draw, x, y, w=150, h=80):
    draw.polygon([(x, y), (x + w, y), (x + w - 25, y + h), (x - 25, y + h)], outline=BLACK, fill=WHITE)
    line(draw, x, y, x - 25, y + h)
    line(draw, x + w, y, x + w - 25, y + h)
    line(draw, x + 18, y + h // 2, x + w - 40, y + h // 2, width=2)


def book(draw, x, y, w=70, h=38):
    draw.rectangle((x, y, x + w, y + h), outline=BLACK, width=LW)
    line(draw, x + 7, y + h // 2, x + w - 7, y + h // 2, width=2)


def pen(draw, x, y, length=64, angle=0):
    if angle:
        line(draw, x, y, x + length, y + 22)
        draw.polygon([(x + length, y + 22), (x + length + 13, y + 22), (x + length + 5, y + 32)], outline=BLACK, fill=WHITE)
    else:
        line(draw, x, y, x + length, y)
        draw.polygon([(x + length, y), (x + length + 13, y - 5), (x + length + 13, y + 5)], outline=BLACK, fill=WHITE)


def motion(draw, box_):
    arc(draw, box_, 205, 330, width=2)


def save(img, name):
    img.save(OUT_DIR / name)


def panel1():
    img = canvas()
    d = ImageDraw.Draw(img)
    aki(d, 95, 72, pose="put", look="right")
    box(d, 252, 170, w=160, h=85)
    book(d, 286, 151, w=82, h=42)
    motion(d, (188, 112, 290, 176))
    meg(d, 545, 72, pose="put", look="left")
    pen(d, 430, 155, length=66, angle=1)
    dashed(d, (112, 70), (290, 178))
    dashed(d, (525, 70), (355, 178))
    save(img, "panel-1.png")


def panel2():
    img = canvas()
    d = ImageDraw.Draw(img)
    box(d, 250, 146, w=170, h=100)
    pen(d, 298, 112, length=70, angle=1)
    aki(d, 100, 76, pose="look_box", look="right")
    meg(d, 540, 76, pose="point", look="left")
    dashed(d, (125, 82), (320, 195))
    dashed(d, (520, 82), (350, 195))
    arc(d, (290, 184, 390, 230), 15, 165, width=2)
    save(img, "panel-2.png")


def panel3():
    img = canvas()
    d = ImageDraw.Draw(img)
    box(d, 245, 188, w=170, h=82)
    man_upper(d, 330, 97, pose="book")
    line(d, 248, 188, 415, 188, width=5)
    book(d, 410, 85, w=86, h=44)
    motion(d, (275, 54, 350, 177))
    motion(d, (342, 54, 420, 177))
    aki(d, 95, 98, pose="surprise", look="right")
    meg(d, 548, 98, pose="surprise", look="left")
    dashed(d, (120, 96), (422, 106))
    dashed(d, (525, 96), (422, 106))
    save(img, "panel-3.png")


def panel4():
    img = canvas()
    d = ImageDraw.Draw(img)
    box(d, 245, 188, w=170, h=82)
    man_upper(d, 330, 130, pose="down")
    line(d, 248, 188, 415, 188, width=5)
    aki(d, 95, 80, pose="receive", look="right")
    meg(d, 548, 80, pose="receive", look="left")
    book(d, 175, 137, w=82, h=42)
    pen(d, 430, 142, length=66, angle=0)
    dashed(d, (120, 82), (212, 158))
    dashed(d, (525, 82), (465, 142))
    motion(d, (298, 100, 365, 194))
    save(img, "panel-4.png")


if __name__ == "__main__":
    panel1()
    panel2()
    panel3()
    panel4()
