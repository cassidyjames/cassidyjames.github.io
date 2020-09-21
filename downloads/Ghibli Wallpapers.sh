#!/bin/sh
for movie in marnie kaguyahime kazetachinu kokurikozaka karigurashi ponyo ged chihiro
do
  for i in {001..050}
  do
    wget "http://www.ghibli.jp/gallery/$movie$i.jpg"
  done
done
