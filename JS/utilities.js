function showSection(id){
    document.getElementById('donate').classList.add('hidden');
    document.getElementById('history').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}

function toggleButtons(activeBtnId) {  
    const btnDonate = document.getElementById('btn-donate');
    const btnHistory = document.getElementById('btn-history');

    btnDonate.classList.remove('bg-[rgb(180,244,97)]', 'hover:bg-[rgb(158,214,85)]');
    btnDonate.classList.add('bg-white','border', 'border-[rgba(17,17,17,0.3)]','text-[rgba(17,17,17,0.7)]');

    btnHistory.classList.remove('bg-[rgb(180,244,97)]', 'hover:bg-[rgb(158,214,85)]');
    btnHistory.classList.add('bg-white','border', 'border-[rgba(17,17,17,0.3)]','text-[rgba(17,17,17,0.7)]');

    const activeBtn = document.getElementById(activeBtnId);
    activeBtn.classList.remove('bg-white','border', 'border-[rgba(17,17,17,0.3)]','text-[rgba(17,17,17,0.7)]');
    activeBtn.classList.add('bg-[rgb(180,244,97)]', 'hover:bg-[rgb(158,214,85)]');
  }

  