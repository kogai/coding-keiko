## 課題

以下の法則に沿ってローマ数字をアラビア数字に変換する

| Roman Symbol | Arabic Value |
| ------------ | ------------ |
| I            | 1            |
| V            | 5            |
| X            | 10           |
| L            | 50           |
| C            | 100          |
| D            | 500          |
| M            | 1000         |

- Roman Symbol の組み合わせで Arabic Value を表現する
- Symbol は大きい順に用いる(例: 7 -> VII)
- ある Symbol の前にそれ自身より小さい Symbol が置かれていた場合、それ自身から小さい方の Symbol を減算する(例: IV -> 4)
- 減算される Symbol は連続して配置できない
- I,X,C,M は 3 回まで連続して配置できる。V,L,D は連続して配置できない
- I は V もしくは X のみから減算できる
- X は L もしくは C のみから減算できる
- C は D もしくは M のみから減算できる

上記の法則に従って、以下の通りに変換できるスクリプトを書いて下さい。
但し、上記の法則に従っていない文字列が与えられた場合は、`Invalid`という文字列を返して下さい。

| Roman Symbol | Arabic Value |
| ------------ | ------------ |
| V            | 5            |
| III          | 3            |
| VII          | 7            |
| IX           | 9            |
| CMXCIX       | 999          |
| MCMIII       | 1903         |
| VV           | Invalid      |
| IL           | Invalid      |
| IIV          | Invalid      |
