const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors());
app.use(express.json());

const questions = [
	{
		id: '1',
		user: 'Oskeny Diaz',
		createdAt: '2022-08-04T12:26:32.771+00:00',
		question: '¿Que vas a hacer de tu vida?',
		description:
			'¿Que hacer de esta unica oportunidad de vivir en el planeta tierra?¿Para que ocuparas los años que te quedan en esta vida?',
		upVotes: 7,
		downVotes: 6,
		answers: [
			{
				id: '1',
				user: 'Nico Bustelo',
				createdAt: '2022-08-04T12:26:32.771+00:00',
				answer:
					'No estoy deprimido es como un sentimiento que no puedo explicar, creo que no se puede explicar con palabras. Es como que un sentimiento de que todo lo que hacemos importa un carajo, cada cosa que hacemos la hacemos para mantenernos ocupados hasta el día de la muerte. No quisiera morir pero tampoco vivir para siempre, lo único malo es que no hay término medio, y quisiera ser tanta cosas en esta vida como científico, artista, escritor, actor, doctor y montón más de cosas la lista es infinita, pero solo tenemos una vida con un tiempo limitado que a cada segundo que pasa se acorta cada vez más y más, bendito sean aquellos que le hallen sentido a la vida, ya sea a través de ser un ser divino, como Jesús, o a través de un estado como el del buda, a través de una persona, de un libro o a través de cualquier cosa, ya que como dicen por ahí uno mismo le da sentido a la vida con cosas sin sentido real. Y el pobre en esta vida lucha el triple porque aparte de sus propios pensamientos tiene que luchar con malos tratos, trabajar más que lo demás y esforzarse más que el resto para simplemente seguir respirando, yo no quiero ser millonario y no quiero ser feliz, simplemente sentirme como verdaderamente soy si es que acaso soy alguien porque me miro al espejo y pienso que ni yo mismo tengo sentido alguno. Soy alguien solitario me gusta mucho la soledad porque aunque ni yo mismo me conozca al menos me caigo bien con todo y crisis existenciales, al menos eso pienso, porque simplemente no tengo que fingir nada, soy simplemente lo que sea que soy, tal vez en esos momentos de soledad pueda encontrarme realmente, si es que existe algo real.',
				upVotes: 0,
				downVotes: 0,
			},
			{
				id: '2',
				user: 'Eze Bustelo',
				createdAt: '2022-08-04T12:26:32.771+00:00',
				answer:
					'Yo tengo 18, y creo que solo me dejo llevar por el "ángel". Eh hecho voluntariados, eh estado en congresos de historia como oyente, eh llevado clases en línea y tengo algunos certificados, pero NO ESTOY ESTUDIANDO EN LA UNIVERSIDAD. Esto me hace sentir mal, porque no eh logrado hacer nada. Es la segunda vez que postulo a una y tengo miedo de volver a fracasar. Pero tengo ganas de seguir y como solo tengo una oportunidad, voy a tratar de dar todo de mí y hacerlo bien.',
				upVotes: 0,
				downVotes: 0,
			},
			{
				id: '3',
				user: 'Lucia Bustelo',
				createdAt: '2022-08-04T12:26:32.771+00:00',
				answer:
					'Tengo 29 años, y después de haber vivido y experimentado cosas que me llevaron a conocer las partes más profundas y tristes de lo que puede ser una vida humana, sentirme hasta el fondo, vacía, rota, muerta por un tiempo sin estarlo realmente(mucho tenía que ver con mi forma de pensar y estar anclada a cosas que no podía soltar, cuestiones emocionales, etc); hoy me encuentro física, mental y emocionalmente mejor, sin embargo, últimamente he estado pensando que no he encontrado  lo que me causa pasión, quiero algo que haga sin que me paguèn o al menos que ese no sea mi punto al hacerlo, algo que haga y diga !claro! a esto vine , esto quería sentir, esto me llena, esto soy; o siento que quiero expresar algo al mundo pero no he sabido cómo hacerlo, escribiendo , hablando tal vez, el arte, es como querer expresar  algo dentro de mi que parece fantástico , que me hace cuestionar muchas cosas , pero que al mismo tiempo no se cómo sacar, como expresar, cómo conectar eso con algo del mundo externo, este foro solo me ayuda a darme cuenta que no soy la única que no ha encontrado eso, otros si y me da gusto, y aunque no es como que va a resolver mi dilema, me alienta a seguir en esta búsqueda, no creo que sea casualidad que justo en este punto me tope con este foro, pero creo que de algún modo me hace sentir mejor, porque quiero dejar ganar a mi ángel interno, también creo que para llegar a eso debo comenzar a leer más a conocer más, pero por algo se empieza y pues adelante. Gracias por la motivación o aunque nadie lo lea, por lo menos por escribirlo.',
				upVotes: 0,
				downVotes: 0,
			},
			{
				id: '4',
				user: 'Ernesto Bustelo',
				createdAt: '2022-08-04T12:26:32.771+00:00',
				answer:
					'Aún estoy relativamente joven, pero estoy notando como me aparecen más lunares, y también veo como mi cara se está arrugando lenta pero constantemente. Cada año se va volando y a veces pienso que mis años en esta tierra se han ido tan rápido que creo que no he heho algo significante para mi, como si hubiera preferido cosas tan vanales que no valen la pena ni mencionar, y llegué a la conclusióon de que tal vez la vida no tenga sentido, tal vez nada de esto tenga sentido y solamente sea; entonces si el mundo es indiferente conmigo ¿Por qué no hago cosas que me llenen? ¿Por qué no hago cosas nuevas? ¿Por qué no dejo ganar al angel así sea una vez? ¿Por  qué no me atrevo y ya? Solo tenemos una vida de la que podemos tener constancia, así que voy a disfrutarla, asi no me pueda despegar de mis necesidades por completo, viajaré por mi mente para conciliarme conmigo y así mismo, con el mundo.',
				upVotes: 0,
				downVotes: 0,
			},
			{
				id: '5',
				user: 'Pelusa Bustelo',
				createdAt: '2022-08-04T12:26:32.771+00:00',
				answer:
					'Tengo la teoría de que a los 20 perdemos el sentido de la vida por que somos más consientes y “despertamos”, nos damos cuenta qué hay algo más después de la escuela, hay algo más que un trabajo, y hay algo más que obedecer reglas, cuando la dejamos de obedecer volteamos a todos lado y nos preguntamos ¿y ahora? Formamos nuestra moral y nuestro sentido.',
				upVotes: 0,
				downVotes: 0,
			},
			{
				id: 6,
				user: 'dios',
				createdAt: '2024-01-04T16:01:15.122Z',
				answer: 'valjdnvalkjnv',
				upVotes: 0,
				downVotes: 0,
			},
		],
	},
	{
		id: '2',
		user: 'Alejandro Gómez',
		createdAt: '2022-08-05T14:30:00.000+00:00',
		question:
			'¿Qué es aquello que aun no has hecho y tienes muchas ganas de hacer? ¿Qué te detiene?',
		description:
			'Siempre he soñado con viajar por el mundo y conocer diferentes culturas. La única barrera que me detiene es mi trabajo actual y el miedo a dejar la estabilidad financiera.',
		upVotes: 6,
		downVotes: 8,
		answers: [
			{
				id: '1',
				user: 'María Rodríguez',
				createdAt: '2022-08-05T14:35:00.000+00:00',
				answer:
					'Comprendo esa sensación. A veces, la seguridad nos impide perseguir nuestras verdaderas pasiones. ¿Has considerado planificar cuidadosamente tu viaje y dejar espacio para la aventura?',
				upVotes: 0,
				downVotes: 0,
			},
			{
				id: '2',
				user: 'Carlos Sánchez',
				createdAt: '2022-08-05T14:40:00.000+00:00',
				answer:
					'Lo mismo me sucede a mí. A veces, la rutina diaria se convierte en una cómoda prisión. ¿Qué tal si tomas pequeños pasos para planificar tu viaje y superas gradualmente tus miedos?',
				upVotes: 0,
				downVotes: 0,
			},
		],
	},
	{
		id: '3',
		user: 'Valeria Méndez',
		createdAt: '2022-08-05T14:30:00.000+00:00',
		question:
			'¿Estás haciendo las cosas en las que crees? ¿O sencillamente te conformas con lo que está haciendo?',
		description:
			'En mi vida actual, siento que estoy simplemente siguiendo el flujo sin realmente hacer lo que creo. Necesito cambiar eso, pero me encuentro atrapada en la rutina diaria. ¿Cómo puedo romper este ciclo y vivir de acuerdo con mis valores?',
		upVotes: 9,
		downVotes: 8,
		answers: [
			{
				id: '1',
				user: 'Javier Torres',
				createdAt: '2022-08-05T14:35:00.000+00:00',
				answer:
					'Entiendo tu situación. A veces, es difícil romper con la rutina. ¿Has considerado establecer metas claras basadas en tus valores y dar pasos pequeños pero consistentes para alcanzarlas?',
				upVotes: 0,
				downVotes: 0,
			},
			{
				id: '2',
				user: 'Laura Pérez',
				createdAt: '2022-08-05T14:40:00.000+00:00',
				answer:
					'He pasado por algo similar. La clave está en identificar tus valores y trabajar hacia ellos de manera constante. ¿Has pensado en buscar actividades que estén alineadas con lo que crees?',
				upVotes: 0,
				downVotes: 0,
			},
			{
				id: 3,
				user: 'dios',
				createdAt: '2024-01-04T16:04:58.372Z',
				answer: 'a ver si funciona esto',
				upVotes: 0,
				downVotes: 0,
			},
		],
	},
	{
		id: 14032,
		user: 'jesus',
		createdAt: '2024-01-06T15:20:02.715Z',
		question: 'vrkajnvlkqnj',
		description: 'lkjvfnlkjna',
		upVotes: 0,
		downVotes: 0,
		answers: [],
	},
];

app.get('/', (req, res) => {
	res.send('<h1>Hello World</h1>');
});

app.get('/questions', (req, res) => {
	res.json(questions);
});

app.listen(3001, () => console.log('server is running on port 3001'));
