---
title: "Lorem Ipsum"
subtitle: "The first post, with a Latin title"
desc: "An exploration of Lorem Ipsum text and its historical significance in typography and design. Learn about the origins and usage of this placeholder text."
author: "Yihui Xie"
slug: "lorem-ipsum"
pubdate: 2015-07-23
moddate: 2023-11-20
categories: ["Example", "Lorem Ipsum"]
tags: ["Markdown"]
katex: true
---

## Sample Text

### Third-level header

#### Fourth-level header

A paragraph (with a footnote):

**Lorem ipsum** dolor sit amet, con<sub>s</sub>ectetur adipi<sup>s</sup>cing elit, sed do eiusmod
tempor incididunt ut labore et dolore *magna aliqua*. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Aute ~~irure~~ dolor in reprehenderit in voluptate velit esse cillum
dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
sunt in culpa qui offi<mark>cia des</mark>erunt mollit anim id est laborum.[^1]

[^1]: I'm sure you are bored by the text here.

List:

1. item1
2. item2
3. item3
   - style1
   - style2[^2]
   - style3
4. item4

[^2]: dmlfjeklfeklfm

A blockquote (a gray bar at the left and lightgray background):

> *Quisque mattis volutp*at lorem vitae feugiat. Praesent porta est quis porta
> imperdiet. Aenean porta, mi non cursus volutpat, mi est mollis libero, id
> suscipit orci urna a augue. In fringilla euismod lacus, vitae tristique massa
> ultricies vitae. Mauris acc*um*san ligula tristique, viverra nulla sed, porta
> sapien. Vestibulum fac**ili**sis nec nisl验证楷体 blandit convallis. Maecenas venenatis
> porta malesuada. Ut ac erat tortor. Orci varius natoque penatibus et magnis
> dis parturient montes, nascetur ridiculus mus. Nulla sodales quam sit amet
> tincidunt egestas. In et turpis at orci vestibulum ullamcorper. Aliquam sed
> ante libero. Sed hendrerit arcu lacus.
>
> --- by Someone

GitHub style alerts：

> [!NOTE]
> Useful information that users should know, even when skimming content.

> [!TIP]
> Helpful advice for doing things better or more easily.

> [!IMPORTANT]
> Key information users need to know to achieve their goal.

> [!WARNING]
> Urgent info that needs immediate user attention to avoid problems.

> [!CAUTION]
> Advises about risks or negative outcomes of certain actions.

A full-width table:

| Sepal.Length | Sepal.Width | Petal.Length | Petal.Width | Species | dsk |
|-------------:|------------:|-------------:|------------:|:--------|-----|
|          5.1 |         3.5 |          1.4 |         0.2 | setosa  | aaa |
|          4.9 |         3.0 |          1.4 |         0.2 | setosa  | aaa |
|          4.7 |         3.2 |          1.3 |         0.2 | setosa  | aaa |
|          4.6 |         3.1 |          1.5 |         0.2 | setosa  | aaa |
|          5.0 |         3.6 |          1.4 |         0.2 | setosa  | aaa |
|          5.4 |         3.9 |          1.7 |         0.4 | setosa  | aaa |

| 名称        | 描述       | 数量 |
|:-----------|:----------:|-----:|
| Item A     | 这是 Item A |   10 |
| Item B     | 这是 Item B |    5 |

Display math (render by katex):

$$
|x| = \begin{cases} x & \text{if } x \geq 0 \\ -x & \text{if } x < 0  \end{cases}
$$

$$
\varlimsup_{n \to \infty}
$$

Inline math:

ni $ a^*=x-b^* $ hao

Definition list:

Apple
:   Pomaceous fruit of plants of the genus Malus in
    the family Rosaceae.

Orange
:   The fruit of an evergreen tree of the genus Citrus.

## [Another Section](https://www.baidu.com)

Inline code and `<kbd>` style:

How about <kbd>Ctrl</kbd> + <kbd>C</kbd> and <kbd>Ctrl</kbd> + <kbd>V</kbd>?

Codeblock display:

```go
// GetTitleFunc returns a func that can be used to transform a string to title case.
// The supported styles are
// - "Go" (strings.Title)
// - "AP" (see https://www.apstylebook.com/)
// - "Chicago" (see https://www.chicagomanualofstyle.org/home.html)
func GetTitleFunc(style string) func(s string) string {
  switch strings.ToLower(style) {
  case "go":
    return strings.Title
  case "chicago":
    return transform.NewTitleConverter(transform.ChicagoStyle)
  default:
    return transform.NewTitleConverter(transform.APStyle)
  }
}
```

```diff
- pnpm add -D vuepress@next
+ pnpm add -D vuepress@next @vuepress/client@next vue
```

---Hope you will enjoy it.
