import { useEffect, useCallback } from 'react';

function useOutsideClick(ref, onOutsideClick) {
    const handleClickOutside = useCallback((event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            onOutsideClick();
        }
    }, [ref, onOutsideClick]);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('touchstart', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
        };
    }, [handleClickOutside]);

    return ref;
}

export default useOutsideClick;
