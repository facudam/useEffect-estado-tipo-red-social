

export const AgregarEstado = ({ textAreaId, titleState, placeHolderArea }) => {
  return (
    <section >
        <form className="agregar-estado">
            <label for={ textAreaId }>{ titleState }</label>
            <textarea name={ textAreaId } id={ textAreaId } cols='30' rows='10' placeholder={ placeHolderArea } required></textarea>
            <button className="publicar">Publicar</button>
        </form>
    </section>
  )
}
