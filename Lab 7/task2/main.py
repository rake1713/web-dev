from models import Car, Airplane

def main():
    my_car = Car("Tesla", "Model 3", 2023, "электричестве")
    my_plane = Airplane("Boeing", "747", 2018, 11000)
    fleet = [my_car, my_plane]
    print("Информация об автопарке:")
    for vehicle in fleet:
        print(f"Объект: {vehicle}") 
        print(vehicle.start_engine())
        print(f"Действие: {vehicle.move()}")
        print("-" * 30)
    print(f"Специфичное для авто: {my_car.open_trunk()}")
    print(f"Специфичное для самолета: {my_plane.check_landing_gear()}")

if __name__ == "__main__":
    main()