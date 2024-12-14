const categories = document.querySelectorAll('#categories .item');
console.log(`Kategorilerin sayısı: ${categories.length}`);

categories.forEach(category => {
    const title = category.querySelector('h2').textContent;
    const itemsCount = category.querySelectorAll('ul li').length;
    console.log(`Kategori: ${title}`);
    console.log(`Öğe sayısı: ${itemsCount}`);
});