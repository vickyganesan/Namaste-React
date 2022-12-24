# Namaste React

# React BootCamp Zero to Hero

# createElement

createElement(type, props, ...children)

# createElement

to create a React element with the given type, props, and children.

# type:

be a tag name(h1,span,div),React component (function, a class, or a special component like Fragment),

# props:

must either be an object or null
null, it will be treated the same as an empty object

# optional ...children

Zero or more child nodes They can be any React nodes, including React elements, strings, numbers, portals, empty nodes (null, undefined, true, and false), and arrays of React nodes.

# Returns

createElement returns a React element object with a few properties:

type: The type you have passed.
props: The props you have passed except for ref and key. If the type is a component with legacy type.defaultProps, then any missing or undefined props will get the values from type.defaultProps.
ref: The ref you have passed. If missing, null.
key: The key you have passed, coerced to a string. If missing, null.

================

When you use JSX, you must start a tag with a capital letter to render your own custom component.

In other words,

<Something /> is equivalent to createElement(Something), but <something /> (lowercase) is equivalent to createElement('something') (note it’s a string, so it will be treated as a built-in HTML tag).

You should only pass children as multiple arguments to createElement if they are all statically known,

     createElement('h1', {}, child1, child2, child3)

If your children are dynamic, pass the entire array as the third argument:

    createElement('ul', {}, listItems)

    This ensures that React will warn you about missing keys for any dynamic lists.
    For static lists this is not necessary because they never reorder.
