
import PyDictionary
import json


translate = PyDictionary.PyDictionary


words_list = []

with open("hi.csv",mode="r") as data:
    new_data = data.readlines()
    for each_word in new_data:
        words = each_word.split()[0].replace(",", "")
        words_list.append(words)


translation = []

num = 0

for allWords in words_list:
    word_mean = translate.meaning(allWords)
    total_word = {
        allWords: word_mean
    }

    translation.append(total_word)

    num +=1

    print(word_mean)

print(translation)

with open("hello.txt",mode="w") as data:
    data.write(translation)
