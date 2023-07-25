import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
    font-family: 'Source Sans 3', sans-serif;
    overflow-x: hidden;
}
html{
    font-size: 100%;
}
h1, h2, h3, h4, h5{
    line-height: 1.2;
    font-weight: 400;
}
h1{
    font-size: 2rem;
}
h2{
    font-size: 1.75rem;
}
h3{
    font-size: 1.50rem;
}
h4{
    font-size: 1.25rem;
}
h5{
    font-size: 1rem;
}
@media (max-width: 700px){
    html{
        font-size: 75%;
    }
}
`