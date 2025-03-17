export  const handleResponse = async (response) => {
    if (!response.ok) {
        const errorText = await response.text();
        let errorMessage = errorText;
        try {
            const errorJson = JSON.parse(errorText);
            errorMessage = errorJson.message || errorText;
        } catch (e) {
            console.error('Error parsing JSON:', e);
        }

        return{
            success: false,
            status: response.status,
            statusText: response.statusText,
            error: errorMessage
        }
    }
    const data = await response.json();
    return {
        success: true,
        data
    };
};