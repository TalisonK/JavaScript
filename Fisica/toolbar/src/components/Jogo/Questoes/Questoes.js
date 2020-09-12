import React from 'react';
import Lista from './Lista.js/Lista'

import "./Questoes.css";

let a = "Whenever you open another file, the editor that is active will display the content of that file. So if you have two editors side by side and you want to open file 'foo.cs' into the right-hand editor, make sure that editor is active (by clicking inside it) before opening file 'foo.cs'.By default editors will open to the right-hand side of the active one. You can change this behavior through the setting workbench.editor.openSideBySideDirection and configure to open new editors to the bottom of the active one instead.When you have more than one editor open you can switch between them quickly by holding the Ctrl (macOS: Cmd) key and pressing 1, 2, or 3.";


const questoes = props => (
    <section className="sect">
        <Lista/>
        <div className="questao">{`${a}`}</div>
        <div className="alternativas">OOOOOOOO</div>
    </section>
)


export default questoes;