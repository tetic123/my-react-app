import React from 'react'

// export default function IntroSection() {
//     return (
//         <section>
//             <h1>
//                 Lorem, ipsum.
//             </h1>
//             <h3>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum dolorem explicabo ab voluptatum saepe, architecto debitis.
//             </h3>
//         </section>
//     )
// }

export default function IntroSection() {
    return React.createElement(
        'section', 
        null,[
            React.createElement('h1', {className: 'centered', key: 1}, 'Result Uni'),
            React.createElement('h3', {key: 2}, 'Loremuhfiudsoi9qweuhdguiq9wudshijoadsjias')
        ])
}