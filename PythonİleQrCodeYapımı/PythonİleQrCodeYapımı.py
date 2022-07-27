import qrcode

code = qrcode.QRCode(
    version = 1,
    error_correction = qrcode.constants.ERROR_CORRECT_L,
    box_size = 100,
    border = 4
)

code.add_data("https://linktr.ee/yazilimcirehberi")
code.make(fit = True)

image = code.make_image(fill_color = (0,0,0), back_color = "white")
image.save("qrcode.png")