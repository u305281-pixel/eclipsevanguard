index.html# eclipsevanguard
<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Eclipse Vanguard</title>

<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;800&display=swap" rel="stylesheet">

<style>
*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:'Orbitron',sans-serif;
scroll-behavior:smooth;
}

body{
background:#0f0f0f;
color:white;
text-align:center;
}

header{
padding:20px;
background:#111;
position:fixed;
width:100%;
top:0;
left:0;
}

header h1{
color:#6a00ff;
letter-spacing:2px;
}

section{
min-height:100vh;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
padding:120px 20px;
}

.hero h2{
font-size:40px;
background:linear-gradient(90deg,#6a00ff,#00f7ff);
-webkit-background-clip:text;
-webkit-text-fill-color:transparent;
}

.hero p{
margin-top:20px;
opacity:0.8;
max-width:600px;
}

.btn{
margin-top:30px;
padding:15px 30px;
border:none;
border-radius:30px;
background:#6a00ff;
color:white;
cursor:pointer;
transition:0.3s;
font-weight:600;
}

.btn:hover{
transform:scale(1.1);
background:#00f7ff;
color:black;
}

.cards{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
gap:20px;
width:100%;
max-width:1000px;
margin-top:50px;
}

.card{
background:#181818;
padding:30px;
border-radius:15px;
transition:0.3s;
}

.card:hover{
transform:translateY(-10px);
background:#222;
}

footer{
padding:30px;
background:#111;
margin-top:50px;
opacity:0.7;
}

@media(max-width:600px){
.hero h2{
font-size:28px;
}
}
</style>
</head>
<body>

<header>
<h1>ECLIPSE VANGUARD</h1>
</header>

<section class="hero">
<h2>Lead Beyond Limits</h2>
<p>Profesyonel oyuncular | Güçlü takım | Geleceğin e-spor markası</p>
<button class="btn">Discord'a Katıl</button>
</section>

<section>
<h2>Takım Kadrosu</h2>

<div class="cards">
<div class="card">
<h3>Player 1</h3>
<p>Rifle / IGL</p>
</div>

<div class="card">
<h3>Player 2</h3>
<p>Entry Fragger</p>
</div>

<div class="card">
<h3>Player 3</h3>
<p>Support</p>
</div>
</div>
</section>

<section>
<h2>Merchandise</h2>
<div class="card" style="max-width:400px;margin:auto;margin-top:30px;">
<p>Resmi Forma</p>
<p>Yakında Satışta</p>
</div>
</section>

<footer>
© 2026 Eclipse Vanguard | Tüm Hakları Saklıdır
</footer>

</body>
</html>
