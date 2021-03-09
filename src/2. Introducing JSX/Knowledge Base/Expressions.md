# Expressions

An expression is any valid unit of code that resolves to a value.

Every syntactically valid expression resolves to some value but conceptually, there are two types of expressions: with side effects (for example: those that assign value to a variable) and those that in some sense evaluate and therefore resolve to a value.

The expression `x = 7` is an example of the first type. This expression uses the = operator to assign the value seven to the variable `x`. The expression itself evaluates to seven.

The code `3 + 4` is an example of the second expression type. This expression uses the + operator to add three and four together without assigning the result, seven, to a variable.

JavaScript has the following expression categories:

* Arithmetic: evaluates to a number, for example 3.14159. (Generally uses arithmetic operators.)
* String: evaluates to a character string, for example, "Fred" or "234". (Generally uses string operators.)
* Logical: evaluates to true or false. (Often involves logical operators.)
* Primary expressions: Basic keywords and general expressions in JavaScript.
* Left-hand-side expressions: Left values are the destination of an assignment.