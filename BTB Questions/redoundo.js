 class TextEditor {
     constructor() {
         this.text = []
         this.undos = []
         this.tasks = [] 
     }
     insert(text) {
         this.text.push(text)
     }
     delete() {
         let letter = this.text.pop()
         this.tasks.push('delete')
     }
     undo() {
       let task = this.tasks.pop() 
       if (task === 'insert') {
           // undo last insert 
           this.text.pop() 
       }
     }
 }