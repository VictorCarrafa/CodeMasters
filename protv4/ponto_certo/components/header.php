<!-- /components/header.php -->
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="./midia/cronometro.png" type="image/x-icon">
    <title>CodeMasters</title>
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">
</head>
<body>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid" style="background-color: #e9ebec;">
        <a class="navbar-brand" href="../views/index.php">CodeMasters</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Alternar navegação">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav" style="margin-left: 338px;">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="../index.php">Início</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="../views/register.php">Registrar</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="../views/login.php">Login</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="../views/attendance.php">Registro de Ponto</a>
                </li>
                <?php if (isset($_SESSION['employee_name'])): ?>
                    <li class="nav-item">
                        <span class="navbar-text">Bem-vindo, <?php echo $_SESSION['employee_name']; ?></span>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../views/logout.php">Logout</a>
                    </li>
                <?php endif; ?>
            </ul>
        </div>
    </div>
</nav>

<div class="container">
