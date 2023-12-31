from flask import render_template

from main import bp


@bp.route('/')
def get_index():
    # тут ваш темплейт
    return "Привіт з індекс сторінки"
