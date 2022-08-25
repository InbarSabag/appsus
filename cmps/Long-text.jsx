export class LongTxt extends React.Component {

  state = {
    isLongTxtShown: false,
  }

  toggleLongTxt = () => {
    this.setState((prevState) =>
      ({ isLongTextShown: !prevState.isLongTextShown }))
  }


  render() {

  }
}