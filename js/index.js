window.onload = function() {
		var path = window.location.pathname

		switch(path) {
			case "/": home()
					  break;
		  	case "/experience": experience()
		  						break;
		}
	}

function home() {
	const path = "/"
	const title = "Inicio"
	const description = ""
	const home_button = "active"
	const experience_button = "button_navbar"
	var home_tab = `<div class="col-lg-4 col-xs-12">
	<div class="card separate_card_left">
		<div class="row center-xs">
				<div class="col-xs-12">
						<i class="fas fa-address-card fa-5x"></i>
				</div>
		</div>
		<h2 class="text_align_center card-title">Habilidades</h2>
		<div class="card-items">
			<ul>
				<li>Dirección de grupos responsables de la planificación del desarrollo regional y urbano</li>
				<li>Elaboraración de proyectos de investigación relacionados con los problemas prioritarios del desarrollo regional sustentable</li>
				<li>Evaluación de impactos de proyectos y políticas públicas sociales a nivel regional</li>
				<li>Analisis de datos, estadística descriptiva e inferencial</li>
				<li>Preparación académica de nuevos investigadores</li>
				<li>Elaboración de diagnósticos regionales para la integración de planes de desarrollo</li>
				<li>Trabajo bajo presión, responsable y organizada</li>
			</ul>
		</div>
	</div>
</div>
<div class="col-lg-4 col-xs-12">
	<div class="card">
		<div class="row center-xs">
			<div class="col-xs-12">
				<i class="fas fa-address-book fa-5x"></i>
			</div>
		</div>
		<h2 class="text_align_center card-title">Referencias</h2>
		<div class="card-items cards_in_card">
			<div class="card">
				<div class="row middle-xs">
					<div class="col-xs-4 col-sm-3">
						<img src="./images/salomon.jpg" alt="Dr. Salomon Nahmad Sitton" class="contact_pic">
					</div>
					<div class="col-xs-8 col-sm-9">
						<a href="http://pacificosur.codice21.net/nahmad-y-sitton-salomon/" target="_blank" class="contact_name">Dr. Salomon Nahmad Sitton</a>
						<p class="contact_description">Investigador en el Centro de Investigaciones y Estudios Superiores en Antropología Social, unidad Pacífico Sur</p>
					</div>
				</div>
			</div>
			<div class="card">
				<div class="row middle-xs">
					<div class="col-xs-4 col-sm-3">
						<img src="./images/jorge.jpg" alt="Dr. Jorge Hernandez Díaz" class="contact_pic">
					</div>
					<div class="col-xs-8 col-sm-9">
						<a href="http://web.iisuabjo.edu.mx/ptc/dr-jorge-hernandez-diaz/" target="_blank" class="contact_name">Dr. Jorge Hernandez Díaz</a>
						<p class="contact_description">Doctor en Antropología Social Profesor Investigador de Tiempo Completo, Universidad Autonoma Benito Juarez de Oaxaca</p>
					</div>
				</div>
			</div>
			<div class="card">
				<div class="row middle-xs">
					<div class="col-xs-4 col-sm-3">
						<img src="./images/rafael.png" alt="Dr. Rafael Gabriel Reyes Morales" class="contact_pic">
					</div>
					<div class="col-xs-8 col-sm-9">
						<a href="https://www.researchgate.net/profile/Rafael_Reyes-Morales" target="_blank" class="contact_name">Dr. Rafael Gabriel Reyes Morales</a>
						<p class="contact_description">Profesor investigador de Tiempo completo, Instituto Tecnologico de Oaxaca</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="col-lg-4 col-xs-12">
		<div class="card separate_card_right">
			<div class="row center-xs">
					<div class="col-xs-12">
							<i class="fas fa-archive fa-5x"></i>
					</div>
			</div>
			<h2 class="text_align_center card-title">Extras</h2>
			<div class="card-items">
				<ul>
					<li><i class="fas fa-file-excel adjust_contact_icon fa-2x"></i>Microsoft Excel</li>
					<li><i class="fas fa-file-powerpoint fa-2x adjust_contact_icon"></i>Microsoft PowerPoint</li>
					<li><i class="fas fa-file-word adjust_contact_icon fa-2x"></i>Microsoft Word</li>
					<li><img src="./images/spss-icon.png" class="icon adjust_spss_icon">IBM SPSS</li>
				</ul>
				<p class="sub_section_title small_top_bottom_margin"><i class="fas fa-comments fa-2x adjust_contact_icon"></i>Idiomas:</p>
				<ul>
					<li>Español: Nativo</li>
					<li>Ingles: Intermedio</li>
				</ul>
			</div>
		</div>
	</div>`

	setNewValues(path, title, description, home_button, experience_button, home_tab)
}

function experience() {
	const path = "/experience"
	const title = "Experiencia"
	const description = ""
	const home_button = "button_navbar"
	const experience_button = "active"
	const experience_tab = ""

	setNewValues(path, title, description, home_button, experience_button, experience_tab)
}

function setNewValues(path, title, description, home_button, experience_button, content) {
	history.pushState(null, "", path)
	document.title = `Modesta Díaz | ${title}`
	document.getElementById("description").setAttribute("content", description)
	document.getElementById("home_button").classList.remove(experience_button)
	document.getElementById("experience_button").classList.remove(home_button)
	document.getElementById("home_button").classList.add(home_button)
	document.getElementById("experience_button").classList.add(experience_button)
	document.getElementById("content").innerHTML = content
}