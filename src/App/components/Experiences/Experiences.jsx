import ExperiencesItem from '../ExperiencesItem';

const Experiences = () => {
	return (
		<section id='experiences' className='w-full h-auto'>
			<h2 className='title-section'>EXPERIENCIA LABORAL</h2>
			<div className='w-full h-auto flex flex-col'>
				<ExperiencesItem
					year='2023-ACTUALIDAD'
					job='TECHNICAL LEAD'
					business='Scotiabank Chile'
				>
					<li className='item-list'>
						<span className='item-list-span'>lideré</span> un equipo de
						desarrolladores para completar y lanzar con éxito tres proyectos de
						software importantes.
					</li>
					<li className='item-list'>
						<span className='item-list-span'>Colaboré</span> con equipos
						multifuncionales para crear y ejecutar un plan de producto integral.
					</li>
					<li className='item-list'>
						<span className='item-list-span'>Mentoré</span> a un equipo de 3
						ingenieros junior, proporcionando orientación técnica y apoyo,
						aumentando sus niveles de productividad.
					</li>
					<li className='item-list'>
						Realicé{' '}
						<span className='item-list-span'>capacitación integral</span> para
						nuevos empleados.
					</li>
					<li className='item-list'>
						Realicé <span className='item-list-span'>evaluaciones</span> de las
						tecnologías existentes utilizadas en el proceso de desarrollo
						frontend.
					</li>
					<li className='item-list'>
						<span className='item-list-span'>Creé e implementé</span>{' '}
						directrices tecnológicas integrales para la comunidad frontend.
					</li>
					<li className='item-list'>
						<span className='item-list-span'>Contribuí</span> al desarrollo y
						mantenimiento de una biblioteca de componentes interna, corrigiendo
						inconsistencias de diseño y optimizado componentes para futuros
						proyectos.
					</li>
					<li className='item-list'>
						<span className='item-list-span'>Implementé</span> una nueva
						arquitectura frontend utilizando React, lo que resultó en una mejora
						en los tiempos de carga de las páginas y un aumento en la
						participación de los usuarios.
					</li>
					<li className='item-list'>
						<span className='item-list-span'>Colaboré</span> con los gerentes de
						producto y diseñadores para idear e implementar nuevas
						características, lo que resultó en un aumento en la satisfacción de
						los usuarios.
					</li>
				</ExperiencesItem>
				<ExperiencesItem
					year='2020-2023'
					job='TECHNICAL LEAD'
					business='NTT DATA Europe & LATAM'
				>
					<li className='item-list'>
						<span className='item-list-span'>
							Desarrollé, implementé y colaboré
						</span>{' '}
						en mas de 7 proyectos de software frontend con arquitectura de
						microservicios y microfrontends, actualmente se encuentran en
						producción en la plataforma del cliente bancario.
					</li>
					<li className='item-list'>
						Realicé <span className='item-list-span'>entrevistas técnicas</span>{' '}
						a más de 50 candidatos, lo que resultó en la contratación de talento
						de alto nivel.
					</li>
					<li className='item-list'>
						Realicé{' '}
						<span className='item-list-span'>capacitación integral</span> para
						nuevos empleados.
					</li>
					<li className='item-list'>
						<span className='item-list-span'>Contribuí</span> al desarrollo y
						mantenimiento de una biblioteca de componentes para un cliente
						bancario, corrigiendo inconsistencias de diseño y optimizado
						componentes para futuros proyectos.
					</li>

					<li className='item-list'>
						<span className='item-list-span'>Proporcioné</span> mentoría a
						mujeres en su crecimiento profesional, ayudándolas a superar
						obstáculos y alcanzar sus metas de carrera.
					</li>
					<li className='item-list'>
						<span className='item-list-span'>Mentoré</span> a un grupo de 5
						ingenieros junior, proporcionando orientación técnica y apoyo,
						aumentando sus niveles de productividad.
					</li>
					<li className='item-list'>
						<span className='item-list-span'>desarrollé</span> contenido
						educativo técnico, facilitando el aprendizaje y la comprensión de
						conceptos técnicos complejos.
					</li>
					<li className='item-list'>
						<span className='item-list-span'>Proporcioné</span> orientación y
						apoyo en el desarrollo de habilidades blandas, como la comunicación
						efectiva, el trabajo en equipo y la resolución de conflictos.
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
				</ExperiencesItem>
			</div>
		</section>
	);
};

export default Experiences;
