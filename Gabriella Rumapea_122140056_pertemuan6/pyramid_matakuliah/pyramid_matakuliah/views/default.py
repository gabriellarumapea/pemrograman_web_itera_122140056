from pyramid.view import view_config
from ..models.matakuliah import Matakuliah

@view_config(route_name='home', renderer='json')
def my_view(request):
    dbsession = request.dbsession
    query = dbsession.query(Matakuliah)
    results = query.all()
    return {'matakuliah': [mk.to_dict() for mk in results]}
