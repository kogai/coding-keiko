## Story

You work for a bank, which has recently purchased an ingenious machine to assist in reading letters and faxes sent in by branch offices.
The machine scans the paper documents, and produces a file with a number of entries which each look like this:

```
    _  _     _  _  _  _  _
  | _| _||_||_ |_   ||_||_|
  ||_  _|  | _||_|  ||_| _|

```

Each entry is 4 lines long, and each line has 27 characters.
The first 3 lines of each entry contain an account number written using pipes and underscores,
and the fourth line is blank. Each account number should have 9 digits, all of which should be in the range 0-9.
A normal file contains around 500 entries.

Your task is to write a program that can take this file and parse it into actual account numbers.

## 課題

`ocr/fixtures/*.txt`の記載されたテキストを、以下の法則に従って数値に変換する
テキストは以下のような形式になっている

```
    _  _     _  _  _  _  _
  | _| _||_||_ |_   ||_||_|
  ||_  _|  | _||_|  ||_| _|

```

- 各エントリーは 4 行からなる
- 4 行の内、3 行が数値を表現するのに使われ、1 行は空行になる
- 各行は 27 文字（改行コードを含む）からなる
- 各エントリーは、9 桁の数値を表現する
- 数値は 0-9 の範囲に収まる
