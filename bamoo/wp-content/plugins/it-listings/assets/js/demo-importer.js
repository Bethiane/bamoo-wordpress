const demoImporter = () => {
	const importBtns = document.querySelectorAll('.demos-wrapper__buttons button');

	const loadingSVG = '<svg class="import-spinner" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>autorenew_black_24dp</title><path d="M0,0H24V24H0Z" fill="none"/><path d="M12,6V9l4-4L12,1V4A8,8,0,0,0,5.24,16.26L6.7,14.8A5.87,5.87,0,0,1,6,12,6,6,0,0,1,12,6Zm6.76,1.74L17.3,9.2A6,6,0,0,1,12,18V15L8,19l4,4V20A8,8,0,0,0,18.76,7.74Z" fill="#fff"/></svg>';
	const completeSVG = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#ffffff"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>';
	
	if (importBtns.length === 0) {
		return;
	}

	const { nonce, action } = demoImport;
	const importDemo = async function(slug) {
		const uri = `action=${action}&nonce=${nonce}&slug=${slug}`;
		try {
			const response = await fetch(ajaxurl, {
                method: 'POST',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: uri
            });
			
			let result = await response.text();
			
			if (result !== '') {
				this.innerHTML = `Imported${completeSVG}`;
				this.disabled = true;
				this.classList.add('import-complete');
				this.classList.remove('importing');
			}
		} catch (error) {
			this.innerHTML = 'Error!'
			console.log(error);
		}
	}

	importBtns.forEach(btn => {
		btn.addEventListener('click', function() {
			const slug = btn.dataset.slug;
			btn.innerHTML = `Importing... ${loadingSVG}`;
			btn.classList.add('importing');
			importDemo.apply( btn, [slug] );
		});
	})
}
demoImporter();