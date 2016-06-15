[{
	id: '906bfc5a-5cbb-4486-b0a0-1abc3603721c',
	name: 'Kamera',
	type: 'sensor',
	description: '',
	content: '',
	tags: ['video', 'auge', 'optik', 'camera', 'cam', 'vision'],
	examples: [],
	items: []
},
{
	id: '66919f4f-c89d-4b50-ab25-7b23e3f03ae1',
	name: 'Speedometer',
	type: 'attribute',
	description: '',
	content: '',
	tags: ['geschwindigkeit', 'speed', 'v', 'radar', 'schnell'],
	examples: [],
	items: []
},
{
	id: 'd34776da-2b13-4a8b-b724-950c38890784',
	name: 'Geschwindigkeit',
	type: 'attribute',
	description: 'Geschwindigkeit beschreibt, wie schnell ein Objekt oder ein Phänomen über die Zeit seine Position verändert.',
	content: '',
	tags: ['speed', 'v', 'velocity', 'schnell'],
	examples: [],
	items: [
		'906bfc5a-5cbb-4486-b0a0-1abc3603721c', //Kamera
		'66919f4f-c89d-4b50-ab25-7b23e3f03ae1' //Speedometer
	]
},
{
	id: 'ee3afb4a-2ad0-4850-b990-d0df6c2b1475',
	name: 'Bewegung',
	type: 'input',
	description: 'Bewegung ist die positionelle Veränderung eines Objektes im Raum.',
	content: '',
	tags: [],
	examples: [
		"Springen",
		"Stehen",
		"Sitzen",
		"Winken",
		"Beugen der Arme",
		"Beugen der Beine",
		"Beugen des Oberkörpers",
		"Beugen des Unterkörpers",
		"Hüftbewegungen",
		"Beugen und Strecken aller Fingerglieder",
		"Synchronisation"
	],
	items: [
		'd34776da-2b13-4a8b-b724-950c38890784', //Geschwindigkeit
		'xxx', //Beschleunigung
		'xxx' //Position im Raum
	]
}]


// types: inpput, attribute, sensor
