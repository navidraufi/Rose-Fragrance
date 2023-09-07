import pandas
import csv

words_list = []

with open("hi.csv",mode="r") as data:
    new_data = data.readlines()
    for each_word in new_data:
        words = each_word.split()[0].replace(",", "")
        words_list.append(words)




print(words_list)