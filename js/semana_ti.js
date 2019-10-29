function cadastro(){

	var a = document;
	var data = a.getElementById("data").value;
	//var data2 = a.getElementById("data2").value;
	var hora = a.getElementById("hora");
	//var hora2 = a.getElementById("hora2");
	var opcaoNova = a.createElement("option");
	var opcaoNova2 = a.createElement("option");
	var opcaoNova3 = a.createElement("option");
	var textoNovo1 = a.createTextNode("9h: PCA - Desenvolvimento de Sistemas");
	var textoNovo2 = a.createTextNode("18h: PCA - Desenvolvimento de Sistemas");
	var textoNovo3 = a.createTextNode("9h: Conversa sobre TCCs");
	var textoNovo4 = a.createTextNode("19h: Melhores TCCs");
	var textoNovo5 = a.createTextNode("18h: PCA - Desenvolvimento de Aplicativos");
	var textoNovo6 = a.createTextNode("9h: PCA - Projetos para a Sociedade");
	var textoNovo7 = a.createTextNode("18h: PCA - Apps inovadores");
	var textoNovo8 = a.createTextNode("19h: III IoT Talks");
	

	if(data == "10/06"){
		$("#hora").empty();
		hora.appendChild(opcaoNova3).appendChild(a.createTextNode(""));
		hora.appendChild(opcaoNova).appendChild(textoNovo1);
		hora.appendChild(opcaoNova2).appendChild(textoNovo2);
	}
	else if (data == "11/06"){
		$("#hora").empty();
		hora.appendChild(opcaoNova3).appendChild(a.createTextNode(""));
		hora.appendChild(opcaoNova).appendChild(textoNovo3);
		hora.appendChild(opcaoNova2).appendChild(textoNovo4);
	}
	else if (data == "12/06"){
		$("#hora").empty();
		hora.appendChild(opcaoNova3).appendChild(a.createTextNode(""));
		hora.appendChild(opcaoNova).appendChild(textoNovo5);
	}
	else if (data == "14/06"){
		$("#hora").empty();
		hora.appendChild(opcaoNova3).appendChild(a.createTextNode(""));
		hora.appendChild(opcaoNova).appendChild(textoNovo6);
		hora.appendChild(opcaoNova2).appendChild(textoNovo7);
	}
	else if (data == "19/06"){
		$("#hora").empty();
		hora.appendChild(opcaoNova3).appendChild(a.createTextNode(""));
		hora.appendChild(opcaoNova).appendChild(textoNovo8);
	}
}

function cadastro2(){

	var a = document;
	//var data = a.getElementById("data").value;
	var data2 = a.getElementById("data2").value;
	//var hora = a.getElementById("hora");
	var hora2 = a.getElementById("hora2");
	var opcaoNova = a.createElement("option");
	var opcaoNova2 = a.createElement("option");
	var opcaoNova3 = a.createElement("option");
	var textoNovo1 = a.createTextNode("9h: PCA - Desenvolvimento de Sistemas");
	var textoNovo2 = a.createTextNode("18h: PCA - Desenvolvimento de Sistemas");
	var textoNovo3 = a.createTextNode("9h: Conversa sobre TCCs");
	var textoNovo4 = a.createTextNode("19h: Melhores TCCs");
	var textoNovo5 = a.createTextNode("18h: PCA - Desenvolvimento de Aplicativos");
	var textoNovo6 = a.createTextNode("9h: PCA - Projetos para a Sociedade");
	var textoNovo7 = a.createTextNode("18h: PCA - Apps inovadores");
	var textoNovo8 = a.createTextNode("19h: III IoT Talks");


	if(data2 == "10/06"){
		$("#hora2").empty();
		hora2.appendChild(opcaoNova3).appendChild(a.createTextNode(""));
		hora2.appendChild(opcaoNova).appendChild(textoNovo1);
		hora2.appendChild(opcaoNova2).appendChild(textoNovo2);
	}
	else if (data2 == "11/06"){
		$("#hora2").empty();
		hora2.appendChild(opcaoNova3).appendChild(a.createTextNode(""));
		hora2.appendChild(opcaoNova).appendChild(textoNovo3);
		hora2.appendChild(opcaoNova2).appendChild(textoNovo4);
	}
	else if (data2 == "12/06"){
		$("#hora2").empty();
		hora2.appendChild(opcaoNova3).appendChild(a.createTextNode(""));
		hora2.appendChild(opcaoNova).appendChild(textoNovo5);
	}
	else if (data2 == "14/06"){
		$("#hora2").empty();
		hora2.appendChild(opcaoNova3).appendChild(a.createTextNode(""));
		hora2.appendChild(opcaoNova).appendChild(textoNovo6);
		hora2.appendChild(opcaoNova2).appendChild(textoNovo7);
	}
	else if (data2 == "19/06"){
		$("#hora2").empty();
		hora2.appendChild(opcaoNova3).appendChild(a.createTextNode(""));
		hora2.appendChild(opcaoNova).appendChild(textoNovo8);
	}
}