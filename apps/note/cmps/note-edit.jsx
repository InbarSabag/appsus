
export class NoteEdit extends React.Component {

    // state = {
    //     note:{
    //         id: utilService.makeId(4),
    //         isPinned: false,
    //         isArchive: false,
    //         isRecycleBin: false,
    //         type,
    //         title,
    //         info,
    //         style
    //     }
    // }

    componentDidMount(){
    console.log(this.props);
    }

    // DynamicCmp = () => {
    //     switch (props.type) {
    //         case 'note-txt':
    //             return <NoteTxt{...props} />
    //         case 'note-img':
    //             return <NoteImg{...props} />
    //         case 'note-todos':
    //             return <NoteTodos{...props} />
    //         case 'note-video':
    //             return <NoteVideo{...props} />
    //     }
    // }

    render() {
        return <h1>This is note</h1>


    }
} 