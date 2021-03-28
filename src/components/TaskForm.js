import React from 'react'

function TaskForm({ onAddTask }) {

    const onSubmit = e => {
        e.preventDefault()
        onAddTask({
            tittle: e.target.titulo.value,
            description: e.target.descripcion.value
        })
        e.target.titulo.value = ""
        e.target.descripcion.value = ""
        e.target.titulo.focus()
    }

    return (

        <fieldset>
            <form onSubmit={onSubmit}>
                <legend>Agregar tarea</legend>
                <div className="form-group">
                    <input type="text" placeholder="Titulo tarea" className="form-control" name="titulo" />
                </div>
                <div className="form-group">
                    <textarea rows="5" placeholder="Descripción tarea" className="form-control" name="descripcion"></textarea>
                </div>
                <button type="submit" className="btn btn-success">Guardar</button>
            </form>
        </fieldset>

    )
}

export default TaskForm