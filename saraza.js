function Form2() {
    return (
        <form action="index.php" method="post">
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Tipo</label>
                
                <select id="tipo" name="tipo" class="form-select" required>
                     <option selected>Open this select menu</option>
                     <option value="INT">INT</option>
                     <option value="VARCHAR">VARCHAR</option>
                   </select>
            </div>
            
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Tabla</label>
                <select id="tabla" name="tabla" class="form-select" required>
                    <option selected>Open this select menu</option>
                    <option value="ussers">ussers</option>
                   
                  </select>
            </div>
             <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Nombre de la Variable</label>
                <input type="text" class="form-control" id="newVar" name="newVar" aria-describedby="Nombre de la Variable"></input>

            </div>
            
            <button type="submit"  class="btn btn-dark" id="btn">Submit</button>
        </form>
    );
}

function CardForm() {
    return (
        <div class="card m-5">
            <div class="card-header">
                CREADOR DE VARIABLES
            </div>
            <div class="card-body">
                <Form2/>
            </div>
        </div>
    );
}