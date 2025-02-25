import { formatDistance, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export const calculateDuration = (startDate: string, endDate: string) => {
  return startDate && endDate ? formatDistance(parseISO(startDate), parseISO(endDate), { locale: ptBR }) : 'N/A';
};

export const calculatePostedDate = (created: string) => {
  return created ? formatDistance(parseISO(created), new Date(), { addSuffix: true, locale: ptBR }) : 'N/A';
};