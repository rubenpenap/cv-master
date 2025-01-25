# 📝 React CV Master Template

¡Bienvenido a **React CV Master Template**! 🚀 Este proyecto te ayuda a crear un CV personalizado y profesional utilizando **React**, **TypeScript**, **Vite** y **TailwindCSS**. Solo necesitas agregar tu información en un archivo data.ts, ver los cambios en tiempo real y descargar tu CV en formato PDF desde el navegador.

---

## 🛠️ Tecnologías

Este proyecto está construido con:

- ⚡ **Vite**: Para un entorno de desarrollo rápido.
- ⚛️ **React**: Para construir la interfaz.
- 🔷 **TypeScript**: Para un código más robusto.
- 📚 **Shadcn**: Para componentes UI.
- 🎨 **TailwindCSS**: Para un diseño elegante y personalizable.

---

## 🚀 Cómo empezar

### 1️⃣ Clona el repositorio

```bash
# Clona el repositorio en tu máquina local
git clone https://github.com/rubenpena/cv-master.git
```

### 2️⃣ Instala las dependencias

```bash
# Ve al directorio del proyecto
cd cv-master

# Instala las dependencias
npm install
```

### 3️⃣ Inicia el proyecto

```bash
# Levanta el servidor de desarrollo
npm run dev

# Abre el proyecto en tu navegador
http://localhost:5173
```

---

## 📂 Estructura del proyecto

```plaintext
react-cv-template/
├── src/
│   ├── components/ui      # Componentes reutilizables (como secciones y títulos)
│   ├── data/            # Archivo JSON para tu información
│   ├── lib/            # Archivo que contiene utilidades para el código
│   ├── App.tsx          # Punto de entrada principal
│   └── ...              # Otros archivos
├── public/              # Archivos públicos
├── package.json         # Dependencias y scripts
├── vite.config.ts       # Configuración de Vite
└── README.md            # Este archivo 😎
```

---

## ✏️ Cómo personalizar tu CV

1. Ve al archivo `src/data/data.ts`.
2. Llena los campos respetando el formato.

### Ejemplo de estructura del archivo `data.ts`:

```json
{
	"name": "NOMBRE APELLIDO",
	"location": "Santiago, Chile",
	"phone": "+56 9 1234 5678",
	"email": "email@gmail.com",
	"experience": [
		{
			"id": `experience-1`,
			"name": "Cumplo",
			"title": "Frontend Developer",
			"location": "Santiago, Chile",
			"startDate": "Enero 2000",
			"endDate": "Enero 2000",
			"activities": [
				"Desarrollo de aplicaciones web, principalmente en ReactJS y VueJS.",
				"Mantenimiento de aplicaciones existentes.",
				"Desarrollo de nuevas funcionalidades."
			]
		},
		{
			"id": `experience-2`,
			"name": "Cumplo",
			"title": "Frontend Developer",
			"location": "Santiago, Chile",
			"startDate": "Enero 2000",
			"endDate": "Enero 2000",
			"activities": [
				"Desarrollo de aplicaciones web, principalmente en ReactJS y VueJS.",
				"Mantenimiento de aplicaciones existentes.",
				"Desarrollo de nuevas funcionalidades."
			]
		}
	],
	"education": [
		{
			"id": `education-1`,
			"name": "Universidad de Chile",
			"title": "Ingeniero en Informática",
			"location": "Santiago, Chile",
			"endDate": "Enero 2000"
		}
	],
	"skills": [
		"ReactJS",
		"VueJS",
		"NodeJS",
		"Express",
		"MongoDB",
		"PostgreSQL",
		"Git",
		"Docker",
		"Kubernetes",
		"AWS",
		"Azure",
		"Google Cloud Platform"
	]
}
```

3. Guarda los cambios y recarga la página en tu navegador para ver tu CV actualizado.

---

## 📄 Cómo descargar tu CV

1. Abre tu CV en el navegador.
2. Usa la opción de **imprimir** (`Ctrl + P` o `Cmd + P`).
3. Selecciona **Guardar como PDF**.
4. ¡Listo! Ahora tienes un CV profesional que puedes compartir. 🥳

---

## 🎨 Personalización adicional

Si quieres personalizar el diseño del CV:

1. Ve a los archivos en `src/components` y ajusta los componentes según tus necesidades.
2. Modifica los estilos en cada componente.

---

## 🐛 Problemas o feedback

Si encuentras un error o tienes sugerencias para mejorar el proyecto, ¡estamos encantados de escucharte! Puedes crear un issue en el repositorio o abrir un PR directamente. 💡

---

## 📜 Licencia

Este proyecto está bajo la licencia [MIT](LICENSE). Puedes usarlo libremente para tus proyectos personales o profesionales. ✨

---

## 🌟 ¡Contribuye!

¿Tienes ideas para mejorar este template? ¡No dudes en contribuir! Haz un fork del proyecto, realiza tus cambios y envía un pull request. 🙌

---

## 🙌 Gracias

Gracias por usar este template. ¡Espero que te ayude a crear el CV perfecto! 💼
