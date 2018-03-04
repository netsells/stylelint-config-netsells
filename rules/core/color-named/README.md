#### 📍 color-named

Does not allow colour names to be used within CSS, only hex & rgb(a) codes are accepted.

##### 🧟 Example of incorrect code for this rule:

a {
    color: black;
}

a {
    color: white;
}

##### 🦄 Example of correct code for this rule:

a {
    color: #ffffff;
}

a {
    color: @black;
}

a {
    color: rgba(0, 0, 0);
}