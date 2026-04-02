import os
import django

# Настройка окружения Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'shop_back.settings')
django.setup()

from api.models import Category, Product

def fill():
    # 1. Очищаем старые данные (опционально, чтобы не дублировать)
    Product.objects.all().delete()
    Category.objects.all().delete()

    # 2. Создаем категории
    cats_data = ["Phones", "Cars", "TVs", "PC"]
    categories = [Category.objects.create(name=name) for name in cats_data]
    print("Categories created!")

    # 3. Данные для продуктов (по 5 на каждую категорию = 20 шт)
    products_map = {
        "Phones": [
            ("iPhone 15", 1200), ("Samsung S23", 1000), ("Pixel 8", 800), 
            ("Xiaomi 14", 700), ("Huawei P60", 900)
        ],
        "Cars": [
            ("Tesla Model 3", 45000), ("BMW M5", 110000), ("Audi RS6", 120000), 
            ("Toyota Camry", 35000), ("Mercedes S-class", 150000)
        ],
        "TVs": [
            ("LG OLED 55", 1500), ("Samsung QLED", 1300), ("Sony Bravia", 1800), 
            ("TCL 4K", 500), ("Philips Ambilight", 900)
        ],
        "PC": [
            ("MacStudio M2", 2000), ("Gaming PC RTX 4090", 4000), ("Office Dell", 600), 
            ("ASUS ROG Laptop", 2500), ("Lenovo ThinkPad", 1800)
        ]
    }

    # 4. Создаем продукты
    for cat_obj in categories:
        items = products_map.get(cat_obj.name, [])
        for name, price in items:
            Product.objects.create(
                name=name,
                price=price,
                description=f"Great {name} from {cat_obj.name} category.",
                count=10,
                is_active=True,
                category=cat_obj
            )
    
    print(f"Success! Created {Category.objects.count()} categories and {Product.objects.count()} products.")

if __name__ == '__main__':
    fill()