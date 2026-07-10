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


def wline(draw, pts, width=LW):
    # Slightly uneven line, closer to the reference hand-drawn panels.
    if len(pts) < 2:
        return
    out = []
    for i, (x, y) in enumerate(pts):
        wiggle = ((i % 2) * 2 - 1) if i not in (0, len(pts) - 1) else 0
        out.append((x + wiggle, y - wiggle))
    draw.line(out, fill=BLACK, width=width, joint="curve")


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
    for sx, ex in [(-14, -22), (-7, -10), (0, 0), (7, 10), (14, 22)]:
        line(draw, x + sx, y - 14, x + ex, y - 29, width=2)
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
    hat(draw, x, y - 27)
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
    back = [(x + 22, y + 18), (x + w - 20, y + 15), (x + w, y + 36), (x + 2, y + 40)]
    front = [(x, y + 38), (x + w, y + 36), (x + w - 25, y + h), (x - 25, y + h)]
    draw.polygon(front, outline=BLACK, fill=WHITE)
    wline(draw, back + [back[0]], width=2)
    wline(draw, [(x, y + 38), (x - 25, y + h), (x + w - 25, y + h), (x + w, y + 36)], width=LW)
    line(draw, x + 18, y + h // 2 + 16, x + w - 40, y + h // 2 + 14, width=2)


def rounded_rect(draw, xy, radius=5, width=LW):
    x1, y1, x2, y2 = xy
    draw.rounded_rectangle((x1, y1, x2, y2), radius=radius, outline=BLACK, width=width, fill=WHITE)


def book(draw, x, y, w=92, h=50):
    rounded_rect(draw, (x, y, x + w, y + h), radius=5, width=LW)
    # Spine and page lines make this read as a book, not a box.
    line(draw, x + 14, y + 4, x + 14, y + h - 4, width=4)
    for off in (14, 24, 34):
        line(draw, x + 24, y + off, x + w - 9, y + off - 2, width=1)


def pen(draw, x, y, length=88, angle=1):
    if angle:
        p1 = (x, y)
        p2 = (x + length, y + 32)
        p3 = (x + length - 4, y + 42)
        p4 = (x - 4, y + 10)
        draw.polygon([p1, p2, p3, p4], outline=BLACK, fill=WHITE)
        draw.polygon([(x + length, y + 32), (x + length + 17, y + 34), (x + length + 4, y + 45)], outline=BLACK, fill=BLACK)
        line(draw, x + 8, y + 3, x + 3, y + 13, width=2)
    else:
        p1 = (x, y)
        p2 = (x + length, y + 10)
        p3 = (x + length - 2, y + 22)
        p4 = (x - 2, y + 12)
        draw.polygon([p1, p2, p3, p4], outline=BLACK, fill=WHITE)
        draw.polygon([(x + length, y + 10), (x + length + 17, y + 17), (x + length - 1, y + 22)], outline=BLACK, fill=BLACK)
        line(draw, x + 8, y + 1, x + 6, y + 13, width=2)


def hat(draw, x, y):
    # Clear brim plus crown, with a tiny gap above the head.
    draw.ellipse((x - 34, y - 4, x + 34, y + 10), outline=BLACK, width=LW)
    draw.arc((x - 23, y - 27, x + 23, y + 13), 190, 350, fill=BLACK, width=LW)
    line(draw, x - 22, y - 3, x + 22, y - 3, width=LW)


def motion(draw, box_):
    arc(draw, box_, 205, 330, width=2)


def save(img, name):
    img.save(OUT_DIR / name)


def panel1():
    img = canvas()
    d = ImageDraw.Draw(img)
    aki(d, 95, 72, pose="put", look="right")
    box(d, 244, 160, w=178, h=105)
    book(d, 292, 144, w=98, h=52)
    motion(d, (188, 112, 290, 176))
    meg(d, 545, 72, pose="put", look="left")
    pen(d, 424, 148, length=88, angle=1)
    dashed(d, (112, 70), (290, 178))
    dashed(d, (525, 70), (355, 178))
    save(img, "panel-1.png")


def panel2():
    img = canvas()
    d = ImageDraw.Draw(img)
    box(d, 240, 136, w=188, h=118)
    pen(d, 292, 96, length=92, angle=1)
    aki(d, 100, 76, pose="look_box", look="right")
    meg(d, 540, 76, pose="point", look="left")
    dashed(d, (125, 82), (320, 195))
    dashed(d, (520, 82), (350, 195))
    arc(d, (290, 184, 390, 230), 15, 165, width=2)
    save(img, "panel-2.png")


def panel3():
    img = canvas()
    d = ImageDraw.Draw(img)
    box(d, 240, 180, w=188, h=96)
    man_upper(d, 330, 97, pose="book")
    line(d, 244, 218, 424, 216, width=5)
    book(d, 405, 78, w=112, h=58)
    motion(d, (275, 54, 350, 177))
    motion(d, (342, 54, 420, 177))
    aki(d, 95, 98, pose="surprise", look="right")
    meg(d, 548, 98, pose="surprise", look="left")
    dashed(d, (120, 96), (414, 108), dash=8, gap=8)
    dashed(d, (525, 96), (430, 108), dash=8, gap=8)
    save(img, "panel-3.png")


def panel4():
    img = canvas()
    d = ImageDraw.Draw(img)
    box(d, 240, 180, w=188, h=96)
    man_upper(d, 330, 130, pose="down")
    line(d, 244, 218, 424, 216, width=5)
    aki(d, 95, 80, pose="receive", look="right")
    meg(d, 548, 80, pose="receive", look="left")
    book(d, 168, 130, w=102, h=54)
    pen(d, 420, 132, length=90, angle=1)
    dashed(d, (120, 82), (212, 158))
    dashed(d, (525, 82), (465, 142))
    motion(d, (298, 100, 365, 194))
    save(img, "panel-4.png")


if __name__ == "__main__":
    panel1()
    panel2()
    panel3()
    panel4()
