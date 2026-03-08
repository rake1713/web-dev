class Vehicle:
    def __init__(self, brand, model, year):
        self.brand = brand
        self.model = model
        self.year = year
        self._is_engine_on = False  

    def start_engine(self):
        self._is_engine_on = True
        return f"Двигатель {self.brand} запущен."

    def stop_engine(self):
        self._is_engine_on = False
        return f"Двигатель {self.brand} остановлен."

    def move(self):
        return "Транспортное средство движется."

    def __str__(self):
        return f"{self.year} {self.brand} {self.model}"


class Car(Vehicle):
    def __init__(self, brand, model, year, fuel_type):
        super().__init__(brand, model, year)
        self.fuel_type = fuel_type

    def move(self):
        return f"Автомобиль {self.model} едет по дороге на {self.fuel_type}."

    def open_trunk(self):
        return "Багажник открыт."


class Airplane(Vehicle):
    def __init__(self, brand, model, year, max_altitude):
        super().__init__(brand, model, year)
        self.max_altitude = max_altitude

    def move(self):
        return f"Самолет {self.model} взлетает и набирает высоту {self.max_altitude}м."

    def check_landing_gear(self):
        return "Шасси проверено и готово."