# createElement

## lets you create a React element. It serves as an alternative to writing JSX.

# #Syntax

const element = createElement(type, props, ...children)

1- Creating an element without JSX

# #Creating an element without JSX

function Greeting({ name })
{
return createElement('h1',{ className: 'greeting' },'Hello ',createElement('i', null,name),
'. Welcome!');
}

# children are optional, and you can pass as many as you need

2- Creating an element without JSX

function Greeting({ name })
{
return (<h1 className="greeting">
Hello <i>{name}</i>. Welcome!

</h1>
);
}

================================================

To render your own React component,
pass a function like Greeting as the type instead of a string like 'h1'

export default function App() {
return createElement(Greeting, { name: 'Taylor' });
}

With JSX, it would look like this:

export default function App() {
return <Greeting name="Taylor" />;
}
