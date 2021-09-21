def run():
    my_dict = {i: i**0.5 for i in range(1, 1001)}
    print(my_dict)


if __name__ == '__main__':
    run()

my_list = {1, 2, 3, 4, 5}

squares =  {i**2 for i in my_list}

print (squares)