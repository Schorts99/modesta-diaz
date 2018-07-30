window.onload = function() {
		home()
	}

function home() {
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

	setNewValues(home_button, experience_button, home_tab)
}

function experience() {
	const home_button = "button_navbar"
	const experience_button = "active"
	const experience_tab = `<div class="col-lg-4 col-xs-12">
			<div class="card separate_card_left">
				<div class="row center-xs">
					<div class="col-xs-12">
						<img src="./images/la-salle.png" alt="Universidad La Salle Oaxaca" class="icon_la_salle">
					</div>
				</div>
				<h2 class="text_align_center card-title"><a href="http://www.ulsaoaxaca.edu.mx/" target="_blank">Universidad La Salle Oaxaca</a></h2>
				<div class="card-items cards_in_card">
					<div class="card">
						<div class="row middle-xs center-xs">
							<div class="col-xs-12">
								<h3>Maestría en educación superior</h3>
							</div>
						</div>
						<div class="row">
							<div class="col-xs-12 small_top_bottom_margin">
								<p>Docente en la materia de Métodos Estadísticos para la Investigación Educativa</p>
							</div>
						</div>
					</div>
					<div class="card">
						<div class="row middle-xs center-xs">
							<div class="col-xs-12">
								<h3>Maestría en Arquitectura Sustentable</h3>
							</div>
						</div>
						<div class="row">
							<div class="col-xs-12 small_top_bottom_margin">
								<p>Docente en la materias Taller de Proyecto de Tesis e Investigación Aplicada al Diseño</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-lg-4 col-xs-12">
			<div class="card">
				<div class="row center-xs">
					<div class="col-xs-12">
						<img src="./images/ito.png" alt="Instituto Tecnológico de Oaxaca" class="icon_ito">
					</div>
				</div>
				<h2 class="text_align_center card-title">Instituto Tecnológico de Oaxaca</h2>
				<div class="card-items cards_in_card">
					<div class="card">
						<div class="row middle-xs center-xs">
							<div class="col-xs-12">
								<h3>Ingeniería en Gestión Empresarial y Licenciatura en Administración</h3>
							</div>
						</div>
						<div class="row">
							<div class="col-xs-12 small_top_bottom_margin">
								<p>Docente en las materias de Desarrollo organizacional, Habilidades directivas II,
									Administración fnanciera e Ingeniería económica. Administración de la calidad (verano).
									Formulación y evaluación de proyectos, Taller de investigación, Sistemas de información de mercadotecnia, Matemáticas fnancieras</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-lg-4 col-xs-12">
			<div class="card separate_card_right">
				<div class="row center-xs middle-xs">
					<div class="col-xs-12">
						<img src="./images/inegi.png" alt="Instituto Nacional de Estadística y Geografía" class="icon_inegi">
					</div>
				</div>
				<h2 class="text_align_center card-title">Instituto Nacional de Estadística y Geografía</h2>
				<div class="card-items cards_in_card">
					<div class="card">
						<div class="row middle-xs center-xs">
							<div class="col-xs-12">
								<h3>Responsable de Explotación de la Encuesta Intercensal 2015</h3>
							</div>
						</div>
						<div class="row">
							<div class="col-xs-12 small_top_bottom_margin">
								<p>Capacitar a los analistas de explotación. Monitorear la revisión de las cifras refejadas
									en los productos de explotación. Precisar a ofcinas centrales las inconsistencias detectadas en las	diferentes etapas del proceso de explotación. Rectifcar la revisión de la información agrupada de acuerdo a los diferentes niveles de desagregación geográfca de los productos a publicarse para la divulgación de resultados y concentrar los documentos para la memoria de la etapa de explotación de la información con la fnalidad de documentar los procesos</p>
							</div>
						</div>
					</div>
					<div class="card">
						<div class="row middle-xs center-xs">
							<div class="col-xs-12">
								<h3>Responsable de Validación de la Encuesta Intercensal 2015</h3>
							</div>
						</div>
						<diw class="row">
							<div class="col-xs-12 small_top_bottom_margin">
								<p> Capacitar a los analistas de validación. Rectifcar la revisión de los reportes del
									sistema de validación con el objeto de dar seguimiento al fujo de la información a las siguientes etapas de tratamiento de la información. Articular actividades que confrmen la correcta aplicación del proceso de validación mediante la revisión de informes sobre el análisis de resultados y concentrar la documentación para la memoria y evaluación de la etapa de validación de la información con la fnalidad de documentar los procesos de Censos y Encuestas	relacionadas a éstos</p>
							</div>
						</diw>
					</div>
				</div>
			</div>
		</div>`

	setNewValues(home_button, experience_button, experience_tab)
}

function setNewValues(home_button, experience_button, content) {
	document.getElementById("home_button").classList.remove(experience_button)
	document.getElementById("experience_button").classList.remove(home_button)
	document.getElementById("home_button").classList.add(home_button)
	document.getElementById("experience_button").classList.add(experience_button)
	document.getElementById("content").innerHTML = content
}