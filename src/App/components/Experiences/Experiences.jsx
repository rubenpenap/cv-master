import ExperiencesItem from '../ExperiencesItem';

const Experiences = () => {
	return (
		<section id='experiences' className='w-full h-auto'>
			<h2 className='title-section'>EXPERIENCIA LABORAL</h2>
			<div className='w-full h-auto flex flex-col'>
				<ExperiencesItem
					year='2020-ACTUALIDAD'
					job='SOLUTIONS ANALIST N2'
					business='NTT DATA Europe & LATAM'
				>
					<li className='item-list'>
						Como <span className='item-list-span'>Líder Técnico</span>,
						validando stack tecnológico, brindando soluciones al equipo y
						documentando.
					</li>
					<li className='item-list'>
						Como <span className='item-list-span'>Mentor</span>, capacitando a
						los nuevos ingresos en React.
					</li>
					<li className='item-list'>
						Como <span className='item-list-span'>Desarrollador Frontend</span>,
						creando soluciones tecnológicas en diferentes proyectos.
					</li>
					<li className='item-list'>
						Como <span className='item-list-span'>Desarrollador Backend</span>,
						colaborando en el cierre de historias de usuario.
					</li>
					<li className='item-list'>
						Como <span className='item-list-span'>Contribuidor</span>, generando
						nuevos componentes para librería Canvas Core React.
					</li>
					<li className='item-list'>
						Como <span className='item-list-span'>Colaborador</span>, brindado
						apoyo en el desarrollo para diferentes proyectos.
					</li>
					<li className='item-list'>
						<span className='item-list-span'>Tecnologías:</span> React, Redux,
						Redux Toolkit, Typescript, Javascript, Node, Express, Java, Spring,
						HTML, Css, Sass, Styled Components, Git, Jira, Confluence,
						Bitbucket, Scrum, Slack.
					</li>
					<li className='item-list'>
						<span className='item-list-span'>Cliente:</span> Scotiabank.
					</li>
				</ExperiencesItem>
				<ExperiencesItem
					year='2019-2020'
					job='DESARROLLADOR WEB'
					business='Productos Mitre LTDA. '
				>
					<li className='item-list'>
						Como <span className='item-list-span'>Desarrollador Frontend</span>,
						creando soluciones tecnológicas para ecommerce de la empresa.
					</li>
					<li className='item-list'>
						Como <span className='item-list-span'>Desarrollador Backend</span>,
						generando API de productos y conecciones con bases de datos.
					</li>
					<li className='item-list'>
						Como <span className='item-list-span'>Colaborador</span>,
						optimizando procesos de despacho, ventas, y gestión de inventario.
					</li>
					<li className='item-list'>
						<span className='item-list-span'>Tecnologías:</span> Wordpress,
						Javascript, PHP, HTML, Css, Adobe Illustrator, Adobe Photoshop, API
						Rest.
					</li>
					<li className='item-list'>
						<span className='item-list-span'>Cliente:</span> Productos Mitre
						LTDA.
					</li>
				</ExperiencesItem>
				<ExperiencesItem
					year='2012-2018'
					job='DESARROLLADOR WEB'
					business='NIVELPRESS'
				>
					<li className='item-list'>
						Como <span className='item-list-span'>Lider de Equipo</span>,
						tomando decisiones técnicas, supervisando el cumplimiento de las
						tareas y calidad de las mismas, asignado tareas y proyectos.
					</li>
					<li className='item-list'>
						Como <span className='item-list-span'>Desarrollador</span>,
						generando soluciones técnica y desarrollando webs y sistemas web.
					</li>
					<li className='item-list'>
						Como <span className='item-list-span'>Colaborador</span>,
						optimizando procesos creativos y creando soluciones a procesos de la
						empresa.
					</li>
					<li className='item-list'>
						<span className='item-list-span'>Tecnologías:</span> Wordpress,
						Javascript, PHP, HTML, Css, Adobe Illustrator, Adobe Photoshop, API
						Rest.
					</li>
					<li className='item-list'>
						<span className='item-list-span'>Cliente:</span> NIVELPRESS.
					</li>
				</ExperiencesItem>
				<ExperiencesItem
					year='2008-2012'
					job='DESARROLLADOR WEB'
					business='Wuaraira Publicidad'
				>
					<li className='item-list'>
						Como <span className='item-list-span'>Desarrollador</span>, creando
						páginas web estaticas y dinámicas
					</li>
					<li className='item-list'>
						Como <span className='item-list-span'>Colaborador</span>,
						optimizando procesos creativos y creando soluciones a procesos de la
						empresa.
					</li>
					<li className='item-list'>
						<span className='item-list-span'>Tecnologías:</span> Joomla,
						Wordpress, Javascript, PHP, HTML, Css, Adobe Illustrator, Adobe
						Photoshop.
					</li>
					<li className='item-list'>
						<span className='item-list-span'>Cliente:</span> Wuaraira
						Publicidad.
					</li>
				</ExperiencesItem>
			</div>
		</section>
	);
};

export default Experiences;
