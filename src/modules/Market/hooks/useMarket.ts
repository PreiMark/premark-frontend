import { getOfferApi } from '@/services/market';
import { useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';

export default function useMarket() {
	const [listOffer, setListOffer] = React.useState<any[]>([]);
	const searchParams = useSearchParams();
	const offerType = searchParams.get('offerType') ?? 'Buy';

	useEffect(() => {
		const getOffer = async () => {
			const res = await getOfferApi(offerType as any);
			setListOffer(res.data);
		};
		getOffer();
	}, [offerType]);

	return {
		listOffer,
	};
}
