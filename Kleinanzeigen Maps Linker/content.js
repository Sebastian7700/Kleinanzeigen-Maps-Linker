// Function to create a clickable Google Maps link from an address
function makeAddressClickable(element, addressText) {
    const encodedAddress = addressText.replace(/ /g, '+');
    const mapsUrl = `https://www.google.com/maps/search/${encodedAddress}/@51.5518667,9.099507,6z`;
    element.innerHTML = `<a href="${mapsUrl}" target="_blank">${addressText}</a>`;
}

// Handle individual ad pages
const viewAdLocality = document.getElementById('viewad-locality');
if (viewAdLocality) {
    let fullAddress = viewAdLocality.textContent.trim();
    const streetAddress = document.getElementById('street-address');
    if (streetAddress) {
        const streetText = streetAddress.textContent.trim();
        fullAddress = `${streetText} ${fullAddress}`; // Combine street and locality
        streetAddress.textContent = ''; // Clear the street-address span
    }
    makeAddressClickable(viewAdLocality, fullAddress);
}

// Handle listing pages with the new HTML structure
const adItems = document.querySelectorAll('.aditem-main--top--left');
adItems.forEach(adItem => {
    // Find all text nodes and get the last one
    const textNodes = Array.from(adItem.childNodes).filter(node => node.nodeType === Node.TEXT_NODE);
    const lastTextNode = textNodes.pop();
    if (lastTextNode) {
        const address = lastTextNode.textContent.trim();
        if (address) {
            const linkSpan = document.createElement('span');
            makeAddressClickable(linkSpan, address);
            adItem.replaceChild(linkSpan, lastTextNode);
        }
    }
});