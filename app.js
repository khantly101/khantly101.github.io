const cardApi = "https://deckofcardsapi.com/api/deck/"
const newDeck = "new/shuffle/?deck_count=1"
const cor = "https://cors-anywhere.herokuapp.com/"

const rows = ["filler", "row1", "row2", "row3", "row4", "row5", "row6", "row7"]


let deckId
let drawn = []
let pile = []
let cardBack = "blue_back"
let drawNum = 3
let childId = ""
let kc = 0
let ks = 0
let kd = 0
let kh = 0

let seconds = 0
let minute = 0

const cardSet = { 
				 	"2C" : "#AD, #AH",
				 	"2S" : "#AD, #AH",
				 	"2D" : "#AC, #AS",
					"2H" : "#AC, #AS",  
				 	"3C" : "#2D, #2H",
				 	"3S" : "#2D, #2H",
				 	"3D" : "#2C, #2S",
					"3H" : "#2C, #2S", 
					"4C" : "#3D, #3H",
					"4S" : "#3D, #3H", 
					"4D" : "#3C, #3S",
					"4H" : "#3C, #3S", 
					"5C" : "#4D, #4H",
					"5S" : "#4D, #4H", 
					"5D" : "#4C, #4S",
					"5H" : "#4C, #4S",
					"6C" : "#5D, #5H",
					"6S" : "#5D, #5H",
					"6D" : "#5C, #5S",
					"6H" : "#5C, #5S",  
					"7C" : "#6D, #6H",
					"7S" : "#6D, #6H",
					"7D" : "#6C, #6S",
					"7H" : "#6C, #6S",
					"8C" : "#7D, #7H",
					"8S" : "#7D, #7H", 
					"8D" : "#7C, #7S",
				 	"8H" : "#7C, #7S", 
					"9C" : "#8D, #8H",
					"9S" : "#8D, #8H",
					"9D" : "#8C, #8S",
				 	"9H" : "#8C, #8S", 
					"0C" : "#9D, #9H",
					"0S" : "#9D, #9H",
					"0D" : "#9C, #9S",
				 	"0H" : "#9C, #9S", 
					"JC" : "#0D, #0H",
					"JS" : "#0D, #0H", 
					"JD" : "#0C, #0S",
				 	"JH" : "#0C, #0S",
					"QC" : "#JD, #JH",
					"QS" : "#JD, #JH", 
					"QD" : "#JC, #JS",
				 	"QH" : "#JC, #JS", 
					"KC" : "#QD, #QH",
					"KS" : "#QD, #QH",
					"KD" : "#QC, #QS",
				 	"KH" : "#QC, #QS"}

const cardSetSide = {
					"AC" : "#2C",
				 	"AS" : "#2S",
				 	"AD" : "#2D",
					"AH" : "#2H",
					"2C" : "#3C",
				 	"2S" : "#3S",
				 	"2D" : "#3D",
					"2H" : "#3H",
				 	"3C" : "#4C",
				 	"3S" : "#4S",
				 	"3D" : "#4D",
					"3H" : "#4H",
					"4C" : "#5C",
					"4S" : "#5S",
					"4D" : "#5D",
					"4H" : "#5H",
					"5C" : "#6C",
					"5S" : "#6S",
					"5D" : "#6D",
					"5H" : "#6H",
					"6C" : "#7C",
					"6S" : "#7S",
					"6D" : "#7D",
					"6H" : "#7H",
					"7C" : "#8C",
					"7S" : "#8S",
					"7D" : "#8D",
					"7H" : "#8H",
					"8C" : "#9C",
					"8S" : "#9S",
					"8D" : "#9D",
				 	"8H" : "#9H",
					"9C" : "#0C",
					"9S" : "#0S",
					"9D" : "#0D",
				 	"9H" : "#0H",
					"0C" : "#JC",
					"0S" : "#JS",
					"0D" : "#JD",
				 	"0H" : "#JH",
					"JC" : "#QC",
					"JS" : "#QS",
					"JD" : "#QD",
				 	"JH" : "#QH",
					"QC" : "#KC",
					"QS" : "#KS",
					"QD" : "#KD",
				 	"QH" : "#KH",
					"KC" : "#AC",
					"KS" : "#AS",
					"KD" : "#AD",
				 	"KH" : "#AH"}

////////////////////////
// Card Api funtions //
///////////////////////

const getDeck = async () => {

	let response = await fetch(cardApi + newDeck)
	let result = await response.json()
	deckId = result.deck_id

}	

const drawCard = async (num) => {

	const newDraw = `/draw/?count=${num}`

	let response = await fetch(cardApi + deckId + newDraw)
	let result = await response.json()
	drawn = result.cards

}

const addPileDeck = async (card) => {

	const pileName = `/pile/deck/add/?cards=${card}`

	let response = await fetch(cardApi + deckId + pileName)

}

const removeDrawn = async (card) => {

	const pileName = `/pile/drawn/draw/?cards=${card}`

	let response = await fetch(cardApi + deckId + pileName)

}


const addPileDrawn = async (card, target) => {

	const pileDrawn = `/pile/drawn/add/?cards=${card}`

	let response = await fetch(cardApi + deckId + pileDrawn)
	
	const newCard = $("<div>").addClass("card").attr("id", card).css("background-image", `url(images/${card}.jpg)`).droppable().addClass("drawn")
	$(`#${target}`).append(newCard).droppable()

}


const pileList = async (name) => {

	const pileUrl = `/pile/${name}/list`

	let response = await fetch(cor + cardApi + deckId + pileUrl)
	let result = await response.json()
	pile = result.piles[name].cards
	
}


////////////////////////
// Render //
///////////////////////

const checkRow = (box) => {

	if (pile.length > 0) {
		$(`#${box}`).css("background-image", `url(images/${box}.jpg)`)
	} 
}

const setFace = () => {

	let id = $(event.target).attr("id")
	if ($(event.target).prop("flippable") === true) {
			$(`#${id}`).css("background-image", `url(images/${id}.jpg)`).draggable({
				containment: ".gameboard",
				snap: ".gameboard",
				revert: true,
				revertDuration: 0
		}).droppable({
				accept: cardSet[id],
				drop: cardDrop,
				hoverClass: "highlight"
		})
	}
}

const addPileRow = (card, target) => {

	const newCard = $("<div>").addClass("card").attr("id", card).css("background-image", `url(images/${cardBack}.jpg)`)
	$(`#${target}`).append(newCard).droppable().on("click", setFace)

}

////////////////////////
// Draggable Function //
///////////////////////

const cardDrop = (event, ui) => {

	let parent = ui.draggable.parent()
	let id = parent.attr("id")
	let uiId = ui.draggable.attr("id")

	if (parent.length === 1) {
		parent.droppable("enable")
	}
	if (parent.hasClass("card")) {
		parent.prop("flippable", true)
	}
	if (parent.hasClass("drawn")) {
		parent.draggable({
				containment: ".gameboard",
				snap: ".gameboard",
				revert: true,
				revertDuration: 0
		}).droppable({
				accept: cardSet[id],
				drop: cardDrop,
				hoverClass: "highlight"
		})
		removeDrawn(ui.draggable.attr("id"))
	}
	if (ui.draggable.hasClass("stacks")) {

		const $div = $("<div>").addClass("card").attr("id", uiId)
		$div.css("background-image", `url(images/${uiId}.jpg)`).draggable({
				containment: ".gameboard",
				snap: ".gameboard",
				revert: true,
				revertDuration: 0
		}).droppable({
				accept: cardSet[uiId],
				drop: cardDrop,
				hoverClass: "highlight"
		})

		$(event.target).append($div)
		ui.draggable.remove()
	} else {
		ui.draggable.removeClass("drawn")
		$(event.target).append(ui.draggable)
	}

	loseKing(uiId)
	$(event.target).droppable("disable")
}

const addDroppableRow = (i) => {

	$(`#${rows[i]}`).droppable({
		accept: "#KH, #KD, #KS, #KC",
		drop: cardDrop
	})
	$(`#${rows[i]}`).droppable("disable")
}

const addDroppableCard = () => {

	if (["AH", "AD", "AS", "AC"].includes($(`#${drawn[drawn.length - 1].code}`).attr("id")) === false) {
		$(`#${drawn[drawn.length - 1].code}`).droppable({
				accept: cardSet[drawn[drawn.length - 1].code],
				drop: cardDrop,
				hoverClass: "highlight"
		})
	}
}

const addDroppableStack = () => {
	$(".stacks").droppable({
		accept: "#AH, #AD, #AS, #AC",
		drop: addStack,
		hoverClass: "highlight"
	}).droppable("enable")
}

////////////////////////
// Drawing Functions //
///////////////////////

const findDeepest = () => {
	let child = $("#drawn")

	while (child.children().length > 0) {
		child = child.children()
	}
	childId = child.attr("id")
}


const drawPile = async (num) => {

	const drawDeck = `/pile/deck/draw/?count=${num}`

	let response = await fetch(cardApi + deckId + drawDeck) 
	let result = await response.json()
	drawn = result.cards
}

const drawDrawn = async (num) => {

	const drawDeck = `/pile/drawn/draw/?cards=${num}`

	let response = await fetch(cardApi + deckId + drawDeck)

}

const resetDeck = async () => {

	let cardCounter = ""

	await pileList("drawn")

	
	for (let i = pile.length -1; i >= 0; i+=0) {
		if (i >= 2) {
			cardCounter += "," + pile[i-2].code + "," + pile[i-1].code + "," + pile[i].code
			i-=3
		} else if (i === 1) {
			cardCounter += "," + pile[i-1].code + "," + pile[i].code
			i-=2
		} else if (i === 0) {
			cardCounter += "," + pile[0].code
			i-=1
		}
	}

	await drawDrawn(pile.length)
	await addPileDeck(cardCounter)
	await pileList("deck")
}

const showDrawn = async () => {

	$("#drawn").empty()

	if (pile.length === 0) {
		await pileList("drawn")
		if (pile.length > 0) {
			await resetDeck()
		} else {
			return
		}
	}

	if (pile.length > drawNum) {
		await drawPile(drawNum)
	} else {
		await drawPile(pile.length)
	}

	for (let i = 0; i < drawn.length; i+=1) {
		findDeepest()
		await addPileDrawn(drawn[i].code, childId)
	}

	$(`#${drawn[drawn.length - 1].code}`).draggable({
				containment: ".gameboard",
				snap: ".gameboard",
				revert: true,
				revertDuration: 0
		}).droppable({
				accept: cardSet[drawn[drawn.length - 1].code],
				drop: cardDrop,
				hoverClass: "highlight"
		})

	await pileList("deck")

}

////////////////////////
// Side Pile Functions //
///////////////////////

const addStack = (event, ui) => {
	let parent = ui.draggable.parent()
	let id = parent.attr("id")
	let uiId = ui.draggable.attr("id")

	if (parent.length === 1) {
		parent.droppable("enable")
	}
	if (parent.hasClass("card")) {
		parent.prop("flippable", true)
	}
	if (parent.hasClass("drawn")) {
		parent.draggable({
				containment: ".gameboard",
				snap: ".gameboard",
				revert: true,
				revertDuration: 0
		}).droppable({
				accept: cardSet[id],
				drop: cardDrop,
				hoverClass: "highlight"
		})
		removeDrawn(ui.draggable.attr("id"))
	}

	const $div = $("<div>").addClass("card").attr("id", uiId).addClass("stacks")
	$div.css("background-image", `url(images/${uiId}.jpg)`).draggable({
				containment: ".gameboard",
				snap: ".gameboard",
				revert: true,
				revertDuration: 0
		}).droppable({
				accept: cardSetSide[uiId],
				drop: addStack,
				hoverClass: "highlight"
		})

	hasKing(uiId)
	winCondition()
	$(event.target).append($div)
	$(event.target).droppable("disable")
	ui.draggable.remove()

}

////////////////////////
// Win Condition //
///////////////////////

const hasKing = (id) => {

	if (id === "KC") {
		kc = 1
	} else if (id === "KS") {
		ks = 1
	} else if (id === "KD") {
		kd = 1
	} else if (id === "KH") {
		kh = 1
	}
}

const loseKing = (id) => {
	if (id === "KC") {
		kc = 0
	} else if (id === "KS") {
		ks = 0
	} else if (id === "KD") {
		kd = 0
	} else if (id === "KH") {
		kh = 0
	}
}

const winCondition = () => {
	if (kc === 1 && ks === 1 && kd === 1 && kh === 1) {
		alert("you win!")
	}
}

////////////////////////
// Difficulty/CardBack Function //
///////////////////////

const easyMode = () => {
	drawNum = 1
	$(".button").removeClass("highlight")
	$("#easy").addClass("highlight")
}

const hardMode = () => {
	drawNum = 3
	$(".button").removeClass("highlight")
	$("#hard").addClass("highlight")
}

const blueBack = () => {
	cardBack = "blue_back"
	$(".back").removeClass("highlight")
	$("#blue").addClass("highlight")
}

const grayBack = () => {
	cardBack = "Gray_back"
	$(".back").removeClass("highlight")
	$("#gray").addClass("highlight")
}

const greenBack = () => {
	cardBack = "Green_back"
	$(".back").removeClass("highlight")
	$("#green").addClass("highlight")
}

const purpleBack = () => {
	cardBack = "purple_back"
	$(".back").removeClass("highlight")
	$("#purple").addClass("highlight")
}

const redBack = () => {
	cardBack = "Red_back"
	$(".back").removeClass("highlight")
	$("#red").addClass("highlight")
}

const yellowBack = () => {
	cardBack = "Yellow_back"
	$(".back").removeClass("highlight")
	$("#yellow").addClass("highlight")
}

const showOverlay = () => {
	$(".overlay").removeClass("hidden")
}

////////////////////////
// Start Game Function //
///////////////////////

const updateTimer = () => {

	seconds += 1

	if (seconds >= 60) {
		minute += 1
		seconds = 0
	}

	if (seconds < 10) {
		$('.timer').text(minute + ":" + 0 + seconds)
	} else {
		$('.timer').text(minute + ":" + seconds)
	}
}


////////////////////////
// Start Game Function //
///////////////////////

const clearBoard = () => {

	$("#drawn").empty()
	$(".row").empty()
	$(".stacks").empty()
	minute = 0
	seconds = 0 

}

const startGame = async () => {
	$(".overlay").addClass("hidden")
	clearBoard()

	setInterval(updateTimer, 1000)

	await getDeck()

	$(`#deck`).css("background-image", `url(images/${cardBack}.jpg)`)

	for (let i = 1; i < 8; i+=1) {
		await drawCard(i)
		for (let e = 0; e < i; e+=1) {
			if (e === 0) {
				await addPileRow(drawn[e].code, rows[i])
			} else {
				await addPileRow(drawn[e].code, drawn[e - 1].code)
			}
		}
		await addDroppableRow(i)
		await addDroppableCard()
		await addDroppableStack()

		$(`#${drawn[drawn.length - 1].code}`).css("background-image", `url(images/${drawn[drawn.length - 1].code}.jpg)`).draggable({
				containment: ".gameboard",
				snap: ".gameboard",
				revert: true,
				revertDuration: 0
		})
	}

	await drawCard(24)
	for (let i = 0; i < 24; i+=1) {
			addPileDeck(drawn[i].code)
	}

	await pileList("deck")

}


////////////////////////
// Ready funtion //
///////////////////////

$(()=>{


})