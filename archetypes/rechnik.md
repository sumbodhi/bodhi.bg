---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: false
url: /rechnik/{{.Name}}
description: "Значението на думата {{.Name}} от пали на български"
keywords: ["{{.Name}}", "значение", "речник", "пали"]
---

{{< word
    word = "{{.Name}}"
    grammar = ""
    breakup = ""
    audio = ""
>}}

1. 


## Примери {.examples-heading}

{{% wordexample %}}                                                                

.

.

{{% /wordexample %}}
