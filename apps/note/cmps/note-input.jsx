
// !    DynamicCmp = (props) => {
//         switch (props.type) {
//             case 'textBox':
//                 return <TextBox {...props} />
//             case 'selectBox':
//                 return <SelectBox {...props} />
//         }
//     }

//     render() {

//         const { survey, answers } = this.state

//         if (!survey) return '<div></div>'

//         const { DynamicCmp, onChangeVal } = this

//         return <section className="survey-app">
//             <h2>Survey - {survey.title}</h2>
//             {
//                 survey.cmps.map((cmp, idx) => <div key={idx} style={{
//                     backgroundColor: 'lightcoral',
//                     padding: '5px', margin: '5px'
//                 }}>
//  !                   <DynamicCmp
//                         type={cmp.type} info={cmp.info}
//                         onChangeVal={(val) => {
//                             onChangeVal(idx, val)
//                         }}
//                     />
//                 </div>)
//             }

//             <hr />
//             <pre>
//                 {JSON.stringify(answers, null, 2)}
//             </pre>
//         </section >
//     }
// }



//! export class TextBox extends React.Component {
//     render() {
//         const { label } = this.props.info
//         const { onChangeVal } = this.props

//         return <label>
//             {label}
//             <input type="text" onChange={(ev) => {
//                 onChangeVal(ev.target.value)
//             }} />
//         </label>
//     }
// }

//! export class SelectBox extends React.Component {
//     render() {
//         const { label, opts } = this.props.info
//         const { onChangeVal } = this.props

//         return <label>
//             {label}
//             <select onChange={(ev) => {
//                 onChangeVal(ev.target.value)
//             }}>
//                 <option value="">Select</option>
//                 {
//                     opts.map(opt => <option key={opt} >{opt}</option>)
//                 }
//             </select>
//         </label>
//     }
// }