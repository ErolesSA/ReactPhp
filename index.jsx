const app = document.getElementById('app');
const names = ['ada love', 'sarazaw', 'saraxa3'];




        
function Tailwind() {
    return (
        <h1 class="text-3xl font-bold underline">
            Hello world!
        </h1>
    );
}

function Boostrap() {
    return (
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <a class="navbar-brand" href="#">BRAIN</a>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Crear Variable</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled">Salir</a>
                        </li>
                    </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}

function Form1() {
    return (
        <form action="index.php" method="post">
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Tipo</label>
                
                <select id="tipo" name="tipo" class="form-select" required>
                     <option selected>Open this select menu</option>
                     <option value="1">INT</option>
                     <option value="2">VARCHARD</option>
                   </select>
            </div>
            
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Tabla</label>
                <select id="Tabla" name="Tabla" class="form-select" required>
                    <option selected>Open this select menu</option>
                    <option value="1">ussers</option>
                   
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
                <Form1/>
            </div>
        </div>
    );
}

function handleClick() {
let count=1;
            alert('increment like auto');
          }

function Like(){
    return(
        

        <div>
            
            
        <button class='bx bxs-like bx-lg' onClick={handleClick}>Like</button>
        </div>

    );
}


function HomePage() {
    return (
        <div>
            {/* Nesting the Header component*/}
            <Boostrap />
            <CardForm /> 
            <Like /> 
            
        </div>
        );
}



// Capitalize the React Component
ReactDOM.render(<HomePage />, app);