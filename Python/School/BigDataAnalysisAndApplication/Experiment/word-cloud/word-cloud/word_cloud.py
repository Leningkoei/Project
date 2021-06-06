import jieba
from wordcloud import WordCloud
import matplotlib.pyplot as plt
from scipy.misc import imread
from collections import Counter
text = open(r"d:/dataset/hubutieba.txt", encoding = "utf8")
myList = list(text)
wordList = ["".join(jieba.cut(sentence)) for sentence in myList]
newText = "".join(wordList)
conWords = [x for x in jieba.cut(newText) if len(x) >= 2]
frequencies = Counter(conWords).most_common()
frequencies = dict(frequencies)
pacMask = imread("apchong.png")
wc = WordCloud(font_path = "simhei.ttf", background_color = "white", max_words = 2000, mask = pacMask)
fit_words(frequencies)
plt.imshow(wc)
plt.axis('off')
plt.show()
wc.to_file(r"d:/dataset/photo2.png")
