### What is JSX?
JSX is html lookalike language which is used in react inorder to replace traditional React.createElement 
- When jsx is written it is written in a html lookalike langauge but actuall it is converted by babel in the background. For eg: 
- This <h1>Hello</h1> is converted to /*#__PURE__*/React.createElement("h1",null,"Hello")
- We can confirm that JSX was brought to code comfortable without React.createElement but in background babel actually use it. 

### Q: {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX.
{TitleComponent} -> {} allows us to write any kind of JS code here, so we embed TitleComponent which is expression or variable into JS.
<TitleComponent/> -> Tells that this is component with some thing that returns JSX value. OR a function that returns a JSX value.

### Q: Role of type attribute in script tag? What options can I use there?
A: The type attribute specifies the type of the script. The type attribute identifies the content between the <script> and </script> tags. It has a Default value which is “text/javascript”.

type attribute can be of the following types:
text/javascript : It is the basic standard of writing javascript code inside the <script> tag.
Syntax
<script type="text/javascript"></script>
text/ecmascript : this value indicates that the script is following the EcmaScript standards.
module: This value tells the browser that the script is a module that can import or export other files or modules inside it.
text/babel : This value indicates that the script is a babel type and required bable to transpile it.
text/typescript: As the name suggest the script is written in TypeScript.