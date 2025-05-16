from pyramid.view import view_config
from pyramid.httpexceptions import HTTPNotFound, HTTPBadRequest
from ..models import Matakuliah
from pyramid.response import Response
from ..models.matakuliah import Matakuliah
import json

@view_config(route_name='matakuliah_list', renderer='json', request_method='GET')
def matakuliah_list(request):
    dbsession = request.dbsession
    matakuliahs = dbsession.query(Matakuliah).all()
    data = [mk.to_dict() for mk in matakuliahs]
    return {'matakuliah': data}

@view_config(route_name='matakuliah_detail', renderer='json', request_method='GET')
def matakuliah_detail(request):
    dbsession = request.dbsession
    mk_id = request.matchdict['id']
    mk = dbsession.query(Matakuliah).filter_by(id=mk_id).first()
    if not mk:
        return HTTPNotFound(json_body={'error': 'Matakuliah tidak ditemukan'})
    return {'matakuliah': mk.to_dict()}

@view_config(route_name='matakuliah_add', renderer='json', request_method='POST')
def matakuliah_add(request):
    try:
        data = request.json_body
        required = ['kode_mk', 'nama_mk', 'sks', 'semester']
        for field in required:
            if field not in data:
                return HTTPBadRequest(json_body={'error': f'Field {field} wajib diisi'})
        mk = Matakuliah(
            kode_mk=data['kode_mk'],
            nama_mk=data['nama_mk'],
            sks=int(data['sks']),
            semester=int(data['semester'])
        )
        dbsession = request.dbsession
        dbsession.add(mk)
        dbsession.flush()
        return {'success': True, 'matakuliah': mk.to_dict()}
    except Exception as e:
        return HTTPBadRequest(json_body={'error': str(e)})

@view_config(route_name='matakuliah_update', renderer='json', request_method='PUT')
def matakuliah_update(request):
    dbsession = request.dbsession
    mk_id = request.matchdict['id']
    mk = dbsession.query(Matakuliah).filter_by(id=mk_id).first()
    if not mk:
        return HTTPNotFound(json_body={'error': 'Matakuliah tidak ditemukan'})
    try:
        data = request.json_body
        if 'kode_mk' in data:
            mk.kode_mk = data['kode_mk']
        if 'nama_mk' in data:
            mk.nama_mk = data['nama_mk']
        if 'sks' in data:
            mk.sks = int(data['sks'])
        if 'semester' in data:
            mk.semester = int(data['semester'])
        return {'success': True, 'matakuliah': mk.to_dict()}
    except Exception as e:
        return HTTPBadRequest(json_body={'error': str(e)})

@view_config(route_name='matakuliah_delete', renderer='json', request_method='DELETE')
def matakuliah_delete(request):
    dbsession = request.dbsession
    mk_id = request.matchdict['id']
    mk = dbsession.query(Matakuliah).filter_by(id=mk_id).first()
    if not mk:
        return HTTPNotFound(json_body={'error': 'Matakuliah tidak ditemukan'})
    dbsession.delete(mk)
    return {'success': True, 'message': f'Matakuliah dengan id {mk_id} berhasil dihapus'}
